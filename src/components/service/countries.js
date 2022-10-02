import axios from "axios";

export const fetchCountries = (alpha3code = '') => 
 axios
 .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3code}`)
 .then((countries) => countries.data)