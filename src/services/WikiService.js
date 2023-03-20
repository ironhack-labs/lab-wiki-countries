import { http } from './BaseService';

export const listCountries = () => http.get('/countries');

export const countryDetail = (id) => http.get(`/countries/${id}`)