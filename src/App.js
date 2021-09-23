import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';


function App() {

  // Countries from JSON
	const [ countryData, setCountryData ] = useState(countries);

	return (
		<div>
			<Navbar />
			<div class="container">
				<div class="row">
					<div class="col-5 countriesListDiv">
						<div class="list-group">

            <CountriesList countryData={countryData} />;

						</div>
					</div>
          <Switch>
          
						<Route
							// exact
							path="/:alpha3Code"
							render={(props) => {
								return <CountryDetails {...props} countryData={countryData} />;
							}}
						/>
					</Switch>

				</div>
			</div>
		</div>
	);
}

export default App;
