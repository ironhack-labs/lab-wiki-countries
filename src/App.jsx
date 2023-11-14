import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

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
      <Navbar/>
			<Routes>
				<Route path="/" element={<HomePage countriesArr={countries} />} />
				<Route path="/countries/:alpha3Code" element={<CountryDetails />} />
			</Routes>
		</div>
    
  );
}

export default App;
