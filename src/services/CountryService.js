import http from './BaseServices'

export const getAllCountries = () => http.get('countries')
export const getCountryDetail = (code) => http.get(`countries/${code}`)
export const getBoderName = (borderCode) => http.get(`countries/${borderCode}`)

