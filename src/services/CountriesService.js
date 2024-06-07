import axios from "axios"

const http = axios.create({
    baseURL: " https://ih-countries-api.herokuapp.com"
});

http.interceptors.response.use(
    function(response) {
        return (response.data)
    }, function (error) {
        return Promise.reject(error)
    }
);

export const getCountries = () => {
    return http.get("/countries")
}

export const getCountry = (alpha3Code) => {
    return http.get(`/countries/${alpha3Code}`)
}