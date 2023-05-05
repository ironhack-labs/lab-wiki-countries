import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<div className="row">
					<CountriesList countries={countries} />
					<Routes>
						<Route path="/:countryAlpha3" element={ <CountryDetails countries={countries} /> } />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
