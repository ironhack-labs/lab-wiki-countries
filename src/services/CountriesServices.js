import http from "./BaseServices"

export const getCountries = () => http.get('/countries')

export const getCountry = (alphacode) => http.get(`/countries/${alphacode}`)

