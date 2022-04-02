import http from "./BaseService";

export const countriesList   = () => http.get("/")
// export const beerRandom = () => http.get("/beers/random")
export const countryItem = (param) => http.get(`/${param}`)
// export const beerNew    = (data) => http.post(`/beers/new`, data)

