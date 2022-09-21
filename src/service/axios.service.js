import axios from 'axios';

class AxiosCountries {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://ih-countries-api.herokuapp.com',
        });
    }

    getCountries() {
        return this.axios.get('/countries').then((res) => res.data);
    }

    findCountry(code) {
        return this.axios.get(`/countries/${code}`).then((res) => res.data)
    }
}


export default AxiosCountries;

