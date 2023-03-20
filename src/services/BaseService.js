import axios from 'axios';

export const http = axios.create({
  baseURL: ' https://ih-countries-api.herokuapp.com'
})

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);