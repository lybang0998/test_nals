import axios from 'axios';
import queryString from 'query-string';

const baseUrl = "https://5f55a98f39221c00167fb11a.mockapi.io"
const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosClient;