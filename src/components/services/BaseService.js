import axios from 'axios'

const http = axios.create({
    baseURL: 'https://restcountries.eu'
  })

  http.interceptors.response.use(response => response.data)

  export const getCountries = () => {
    return http.get('/rest/v2/all')
  }