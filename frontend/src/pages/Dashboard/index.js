import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import HistroicalService from '../../services/HistroicalService';

import { ChartConfig, addCandlestickSeries, addHistogramSeries } from './ChartConfig';

// let chart
let candlestickSeries
let volumeSeries

const animatedComponents = makeAnimated();

const Dashboard = () => {


    const chartContainerRef = useRef();
    const chart = useRef();
    const resizeObserver = useRef();


    const [ticker, setTicker] = useState(null);
    const [tickerOptions, setTickerOptions] = useState([]);
    const [lastCandle, setLastCandle] = useState([]);
    const [searchFlag, setSearchFlag] = useState(false);

    useEffect(() => {
        HistroicalService.getTickers().then(res => {
            setTickerOptions(res.data);
            setTicker(res.data[0]);
        })
    }, [])

    useEffect(() => {
        if (ticker) {
            HistroicalService.getChartData(ticker.value).then(res => {
                setLastCandle(res.data);
            })
        }
    }, [ticker]);

    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, ChartConfig(chartContainerRef.current));

        candlestickSeries = chart.current.addCandlestickSeries(addCandlestickSeries);

        volumeSeries = chart.current.addHistogramSeries(addHistogramSeries);
    }, []);

    useEffect(() => {
        candlestickSeries.setData(lastCandle);
        volumeSeries.setData(lastCandle);
    }, [lastCandle]);


    useEffect(() => {
        resizeObserver.current = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            chart.current.applyOptions({ width, height });
            setTimeout(() => {
                chart.current.timeScale().fitContent();
            }, 0);
        });

        resizeObserver.current.observe(chartContainerRef.current);

        return () => resizeObserver.current.disconnect();
    }, [lastCandle]);


    return (
        <>
            <div className="root_container">
                <div className="top_container">
                    {!searchFlag ?
                        (
                            <div className="top-group">
                                <div className="top-content">
                                    <div className="top-wrap">
                                        <div className="top-buttons-group">
                                            <div className="header-toolbar-symbol-search">
                                                <input
                                                    className="input-text"
                                                    value={ticker ? ticker.label : ""}
                                                    onClick={() => setSearchFlag(true)}
                                                />
                                            </div>
                                        </div>

                                        <div className="top-buttons-group">
                                            <span>D</span>
                                        </div>
                                        <div className="top-buttons-group fill-groups">
                                            {/* <span>D</span> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            <>
                            <Select
                                styles={{
                                    menu: provided => ({ ...provided, zIndex: 9999 })
                                }}
                                isClearable={true}
                                components={animatedComponents}
                                options={tickerOptions}
                                onChange={val => {
                                    // console.log(val);
                                    if(val) setTicker(val);
                                    setSearchFlag(false);
                                    
                                }}
                                value={ticker}
                            />
                            <span>*</span>
                            </>
                        )}

                </div>
                <div className="left_container"></div>
                <div className="center_container">
                    <div className="symbol-info">
                        <div className="symbol-item">
                            <div className="symbol-no-wrapper">
                                <div className="symbol-title">
                                    <div className="symbol-with-dot">{ticker?ticker.name: ""}</div>
                                    <div className="dot"></div>
                                    <div className="symbol-with-dot">{ticker?ticker.sector: ""}</div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <div ref={chartContainerRef} id='chart' className="chart-container" />
                </div>


            </div>
        </>
    );
}

export default Dashboard