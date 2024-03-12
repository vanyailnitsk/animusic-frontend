import axios, {interceptors} from 'axios'

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
$host.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
export {$host};