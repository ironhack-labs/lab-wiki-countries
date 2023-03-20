import { http } from "./BaseServices";

export const listCountries = () => {
    return http.get ('/countries')
}