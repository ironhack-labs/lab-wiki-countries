import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/countries'
});

export default api;