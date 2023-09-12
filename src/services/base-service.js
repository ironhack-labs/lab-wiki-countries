import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-countries-api.herokuapp.com',
})

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error);
    }
);

export default http;