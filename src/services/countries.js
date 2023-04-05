import axios from 'axios';

const http = 'https://ih-countries-api.herokuapp.com/countries';

const getCountriesByAPI = () => axios.get(http).then((res) => res.data);

const getOneCountryByAPI = (code) =>
  axios.get(`${http}/${code}`).then((res) => res.data);

export { getCountriesByAPI, getOneCountryByAPI };
