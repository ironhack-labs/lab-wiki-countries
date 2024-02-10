import axios from 'axios';

const httpLocal = axios.create({
    baseURL: 'http://localhost:5173',
});

httpLocal.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error);
    }
);

export default httpLocal;