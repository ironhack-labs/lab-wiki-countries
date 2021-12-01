
import './App.css';
import Nav from './components/Nav';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import {Switch, Route} from 'react-router-dom';

const allCountries = countries

function filterCountries(countries, searchTerm) {
	return countries.filter(country => country.cca3 === searchTerm)
}

function getBorders(countries, searchTerm) {
	return countries.filter(country => country.borders.includes(searchTerm));

}

function App() {

	return (
		<div className="App">
			<Nav/>
			<div className="countries-section">
				<CountriesList allCountries={allCountries}/>
				<Switch>
					<Route path="/:cca3" exact render={(props) => <CountryDetails {...props} theCountry={filterCountries(allCountries, props.match.params.cca3)} borders={getBorders(allCountries, props.match.params.cca3)}/>} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
