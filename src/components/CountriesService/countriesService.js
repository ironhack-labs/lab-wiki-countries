import http from '../../services/baseService'

export const countriesList = () => http.get('/countries');
export const countryDetail = (name) => http.get(`/countries/${name}`);