import { http } from "./BaseServices";

export const listCountries = () => {
    return http.get ('/countries')
}

export const getCountryById = (id) => {
    return http.get (`/countries/${id}`)
}