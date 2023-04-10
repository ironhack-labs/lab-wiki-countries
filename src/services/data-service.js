import axios from 'axios'

const apiUrl = 'https://ih-countries-api.herokuapp.com/countries'

export function getData() {
  return axios.get(apiUrl).then(response => response.data)
  
}