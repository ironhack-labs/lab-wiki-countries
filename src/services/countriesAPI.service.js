import axios from 'axios'

class AxiosCountriesAPI {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://ih-countries-api.herokuapp.com/',
        });
    }

    getCountries() {
        return this.axios
            .get('countries')
            .then((response) => response.data);
    }
}

export default new AxiosCountriesAPI()