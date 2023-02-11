import axios from "axios";
const BASE_URL = process.env.REACT_APP_API
console.log(BASE_URL)


export const getCountries = () => {
    return axios.get(`${BASE_URL}/countries`)
}

export const getCountryDetails = (countryCode) => {
    return axios.get(`${BASE_URL}/countries/${countryCode}`)
}