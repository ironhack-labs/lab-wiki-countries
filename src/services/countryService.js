import httpCountries from "./baseCountryService";

export const getCountries = () => httpCountries.get("/countries");

export const getCountryDetail = (alphaCode) =>
  httpCountries.get(`/countries/${alphaCode}`);