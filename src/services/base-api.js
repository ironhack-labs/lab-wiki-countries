import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-countries-api.herokuapp.com'
})

export default http;