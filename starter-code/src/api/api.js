import axios from 'axios'

export default class ApiHandler {
    constructor(url) {
        this.handler = axios.create({
          baseURL: 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
        });
      }
    
    get(endpoint, params) {
        return this.handler.get(endpoint)
    }
}