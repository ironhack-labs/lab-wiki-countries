import axios from 'axios';

export const fetchCountries =  () => 
    axios
        .get("https://ih-countries-api.herokuapp.com/countries")
        .then(countries => countries)

export const fetchOneCountry = (code) =>
    axios
    .get(`https://ih-countries-api.herokuapp.com/countries/${code}`)
    .then((country) => country);