import http from './base-api';

const apiUrl = 'https://ih-countries-api.herokuapp.com/countries';

export function getData() {
  return http.get(apiUrl).then((response) => response.data);
}

export function getCountryData(id) {
  http.get(`/countries/${id}`).then((res) => res.data);
}
