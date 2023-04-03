import { http } from './BaseService';

export const listCountries = () => http.get('/countries');
export const detailCountries = (id) => http.get(`/countries/${id}`);
