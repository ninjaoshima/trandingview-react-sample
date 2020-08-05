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

    getChartData = (ticker) => {
        const api = getInsightBackendAPI();
        return axios.get(`${api}/main/historical/${ticker}`, {})
            .then(res => res.data)
            .catch(error => handleErrorResponseObject(error));
    }
}

export default (new HistroicalService())