import axios from "axios";

export const fetchCountries = (id = '') =>
  axios
    .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    .then((countries) => countries.data);
