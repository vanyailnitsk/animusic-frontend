import axios from 'axios'

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
$host.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);
export {$host};