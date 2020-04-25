import axios from 'axios';

export const getCountries = () => {
    return axios.get("https://raw.githubusercontent.com/mledoze/countries/master/countries.json");
}