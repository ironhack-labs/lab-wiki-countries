import axios from 'axios';

export const fetchCountries = (code = "") =>
    axios
    .get(`https://ih-countries-api.herokuapp.com/countries/${code}`)
    .then((countries) => countries.data)