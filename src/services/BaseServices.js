import axios from 'axios'

const http = axios.create({
  baseURL: 'https://ih-countries-api.herokuapp.com/',
  // Para que el back reciba las cookies no olvidar
  // withCredentials: true
})

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default http
