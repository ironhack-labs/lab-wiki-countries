import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import countries from './countries.json'


function App() {

	const [ countryData, setCountryData ] = useState(countries);

	return (
		<div>
			<Navbar />
			<div class="container">
				<div class="row">
					<div class="col-5 countriesListDiv">
						<div class="list-group">
							{countryData.map((country) => {
								return <CountriesList countryData={country} key={country.alpha3Code} />;
							})}
						</div>
					</div>
					<CountryDetails countryData={countryData} />
				</div>
			</div>
		</div>
	);
}

export default App;
