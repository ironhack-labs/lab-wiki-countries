import axios from "axios";

const http = axios.create({
    baseURL: 'http://ih-countries-api.herokuapp.com',
    withCredentials: false
})

http.interceptors.response.use(
    response => response.data,
    error => new Promise.reject(error)
)


export default http;