import axios from "axios";

export const fetchCountries = () => {
  return axios.get('https://ih-countries-api.herokuapp.com/countries')
}