import axios from "axios";

export default class CountryService {
	constructor() {
		let service = axios.create({
			baseURL: "https://ih-countries-api.herokuapp.com"
		});

		this.service = service;
	}

	getCountries() {
		return this.service.get("/countries").then((response) => response.data);
	}

	getCountry(alpha3) {
		return this.service.get(`/countries/${alpha3}`).then((response) => response.data);
	}
}