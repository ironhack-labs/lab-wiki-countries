import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import { Route } from 'react-router-dom';
import {useState, useEffect } from 'react';


function App() {
  const [countriesList, setCountriesList] = useState([]);

  const loadCountries = () => {
    setCountriesList(countries)
  }

  useEffect(() => {
    loadCountries();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList countries={countriesList} />
        <Route
          path='/:cca3'
          render={
            (props) => <CountryDetails {...props} countries={countriesList} />
        } />
      </div>
      
    </div>
  );
}

export default App;
