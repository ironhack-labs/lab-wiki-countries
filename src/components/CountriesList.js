function CountriesList({ countryData }) {
	return (
		<a class="list-group-item list-group-item-action countryListA" href={countryData.alpha3Code}>
			<img src={countryData.flag} className="countriesListImage" />
			<p className="pNoMargin">{countryData.name}</p>
		</a>
	);
}

export default CountriesList;