import axios from 'axios';

export default class CountriesService{
  constructor(){
    this.instance = axios.create({
      baseURL: "https://restcountries.eu/rest/v2"
    })
  }

  get = () => this.instance.get("/all");
}