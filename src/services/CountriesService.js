import http from "./BaseService";

export const countriesList   = () => http.get("/")
export const countryItem = (param) => http.get(`/${param}`)

