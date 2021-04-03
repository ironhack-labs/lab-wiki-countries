import axios from 'axios'

const http = axios.create({
  baseURL: ' https://restcountries.eu/rest/v2'
})

http.interceptors.response.use(response => response.data)

export const getCountries = () => {
  return http.get('/all')
}
