import http from "./base-service";

export const countriesList = () => http.get("/countries");

export const countryDetail = (alpha3Code) => http.get(`/countries/${alpha3Code}`);

