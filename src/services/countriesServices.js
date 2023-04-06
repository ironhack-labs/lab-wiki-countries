import axios from 'axios';

const apiUrl = 'https://ih-countries-api.herokuapp.com/countries';

export function getCountries() {
  return axios.get(apiUrl).then(response => {
    return response.data
  })
}

