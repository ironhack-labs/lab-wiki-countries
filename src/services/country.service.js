import axios from 'axios'

class AxiosCountryAPI {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://ih-countries-api.herokuapp.com/'
        })
    }
    getCountries() {
        return this.axios
            .get('countries')
            .then((response) => response.data)
    }

    getCountry(countryId) {
        return this.axios
            .get(`countries/${countryId}`)
            .then((response) => response.data)
    }
}

export default new AxiosCountryAPI()