import axios from 'axios';


export default class CountryService  {
    constructor() {
        this.instance = axios.create({
          baseURL: 'https://restcountries.eu/rest/v2/all'
        });
    }
    get = () => this.instance.get("/")
}
