import './App.css';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetailsPage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		axios
			.get('https://ih-countries-api.herokuapp.com/countries')
			.then((response) => {
				setCountries(response.data);
			})
			.catch((error) => {
				console.log('failed');
				console.log(error);
			});
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage countriesArr={countries} />} />
				<Route path="/countries/:alpha3Code" element={<CountryDetails />} />
			</Routes>
		</div>
	);
}

export default App;
