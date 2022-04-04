import http from '../baseService/BaseService';

export const countriesList = () => http.get('/countries');
export const countryDetail = (name) => http.get(`/countries/${name}`);