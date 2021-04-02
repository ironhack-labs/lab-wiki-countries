import axios from 'axios'

const http = axios.create({
    baseURL: 'https://restcountries.eu'
})

http.interceptors.response.use(response => response.data)

export const getAllCountries = () => {
    return http.get(`/rest/v2/all`)
}

export const getSearch = (name) => {
    return http.get(`/rest/v2/name/${name}`)
}

export const getOneCountry = (code) => {
    return http.get(`/rest/v2/alpha/${code}`)
}


