import axios from 'axios'
import { getInsightBackendAPI } from '../utils/Http';
import { handleErrorResponseObject } from '../utils/Utils';

class HistroicalService {
    getTickers = () => {
        const api = getInsightBackendAPI();
        return axios.get(`${api}/main/tickers`, {})
            .then(res => res.data)
            .catch(error => handleErrorResponseObject(error));
    }

    getChartData = (ticker, date) => {
        const api = getInsightBackendAPI();
        return axios.get(`${api}/main/historical/${ticker}/${date}`, {})
            .then(res => res.data)
            .catch(error => handleErrorResponseObject(error));
    }

    getSearchChartData = (searchStr) => {
        console.log(searchStr);
    }
}

export default (new HistroicalService())