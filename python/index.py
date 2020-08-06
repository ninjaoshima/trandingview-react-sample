import time
import pandas as pd
from pandas_datareader import data as pdr
import pymysql.cursors
import yfinance as yf
yf.pdr_override()

conn = pymysql.connect(host='localhost', 
                       user='root', 
                       db='stock_prices')
cursor = conn.cursor()

# sql = "INSERT INTO exchange (name, currency) VALUES ('NYSE', 'USD')"
# cursor.execute(sql)
# conn.commit()

# nyse = pd.read_csv('data/companylist.csv')
# print("Number of NYSE tickers:", len(nyse))
# nyse.drop(['LastSale', 'MarketCap', 'IPOyear', 'Summary Quote', 'Unnamed: 8'], axis=1, inplace=True)
# # print(nyse.columns)
# # nyse = nyse[:-1]
# nyse.columns = ['ticker', 'name', 'sector', 'industry']
# nyse['exchange_id'] = 1
# cols = nyse.columns.tolist()
# nyse = nyse[cols[-1:] + cols[:-1]]

# # print(nyse)
# for row in nyse.itertuples(index=False):
#     try:
#         cursor.execute("INSERT INTO security (exchange_id, ticker, name, sector, industry) VALUES (%s, %s, %s, %s, %s)", row)
#     except:
#         # Assume that the exception is because sector
#         # and/or industry are missing
#         cursor.execute("INSERT INTO security (exchange_id, ticker, name) VALUES (%s, %s, %s)", row[:3])
# conn.commit()

# sql = "INSERT INTO data_vendor (name, website_url) VALUES " + \
#       "('YahooFinance', 'https://finance.yahoo.com')"
# cursor.execute(sql)
# conn.commit()

YAHOO_VENDOR_ID = 1

all_tickers = pd.read_sql("SELECT ticker, id FROM securities", conn)
ticker_index = dict(all_tickers.to_dict('split')['data'])
tickers = list(ticker_index.keys())
index = 0
for ticker in tickers:
    # Download data
    print(ticker)
    df = pdr.get_data_yahoo(ticker, start="2020-04-01")
    # Write to daily_price
    index += 1
    for row in df.itertuples():
        times = row.Index
        lists = list(row)
        lists[0] = times.strftime('%Y-%m-%d')
        values = [YAHOO_VENDOR_ID, ticker_index[ticker]] + lists
        # cursor.execute("INSERT INTO daily_prices (data_vendor_id, ticker_id, price_date, open_price, high_price, low_price, close_price, adj_close_price, volume) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)",
        #tuple(values))
    
    conn.commit()
    print("{} of {}".format(index, len(tickers)))


def download_data_chunk(start_idx, end_idx, tickerlist, 
                        start_date=None):
    """
    Download stock data using pandas-datareader
    :param start_idx: start index
    :param end_idx: end index
    :param tickerlist: which tickers are meant to be downloaded
    :param start_date: the starting date for each ticker
    :return: writes data to mysql database
    """
    ms_tickers = []
    for ticker in tickerlist[start_idx:end_idx]:
        df = pdr.get_data_yahoo(ticker, start=start_date)
        if df.empty:
            print(f"df is empty for {ticker}")
            ms_tickers.append(ticker)
            time.sleep(3)
            continue

        for row in df.itertuples():
            values = [YAHOO_VENDOR_ID, ticker_index[ticker]] + \
                    list(row)
            try:
                sql = "INSERT INTO daily_price (data_vendor_id, ticker_id, price_date, open_price,high_price, low_price, close_price,adj_close_price, volume) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, tuple(values))
            except Exception as e:
                print(str(e))
        conn.commit()
        return ms_tickers


def download_all_data(tickerlist, chunk_size=100,
                      start_date=None):
    # Hacky snippet to get the ceiling
    n_chunks = -(-len(tickerlist) // chunk_size)

    ms_tickers = []
    for i in range(0, n_chunks, chunk_size):
        # This will download data from the earliest possible date
        ms_from_chunk = download_data_chunk(i, i+chunk_size, 
                                            tickerlist,
                                            start_date)
        ms_tickers.append(ms_from_chunk)
        
        # Check for possible throttling
        if len(ms_from_chunk) > 40:
            time.sleep(120)
        else:
            time.sleep(10)
    return ms_tickers

def update_prices():
    # Get present tickers
    present_ticker_ids = pd.read_sql("SELECT DISTINCT ticker_id FROM daily_price", 
                                    conn)
    index_ticker = {v: k for k, v in ticker_index.items()}
    present_tickers = [index_ticker[i]
                       for i in list(present_ticker_ids['ticker_id'])]
    # Get last date
    sql = "SELECT price_date FROM daily_price WHERE ticker_id=1"
    dates = pd.read_sql(sql, conn)
    last_date = dates.iloc[-1, 0]
    download_all_data(present_tickers, start_date=last_date)