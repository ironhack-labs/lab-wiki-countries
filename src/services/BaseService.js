import axios from 'axios';

const http = axios.create({
    baseURL: 'http://restcountries.eu/rest/v2'
})

http.interceptors.response.use(response => {
    console.log('response.data', response.data)
    return response.data
})

export const getCountries = () => {
    return http.get('/all')
}