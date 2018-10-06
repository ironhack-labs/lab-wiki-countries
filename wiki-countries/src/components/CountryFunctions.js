const filterCountries = (country, countries) => {
	let borders = country.borders;
	let countriesFiltered = countries.filter((country) => {
		if (borders.includes(country.cca3)) {
			return country;
		}
		return false;
	})
	return countriesFiltered;
}

export const bordersId = (country, countries) => {
	let countriesFiltered = filterCountries(country, countries);
	let countriesId = countriesFiltered.map(country =>  country.ccn3);
	return countriesId;
}

export const bordersToNames = (country, countries) => {
	let countriesFiltered = filterCountries(country, countries);
	let countriesName = countriesFiltered.map(country =>  country.name.common);
	return countriesName;
}