import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
// import countriesArr from './countries.json';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then( response => setCountries(response.data))
      .catch(e => console.log(e))
  }, [])

  const getCountry = (countryAlpha3Code) => {
    return countries.filter((countryObj) => countryObj.alpha3Code === countryAlpha3Code )[0]
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          
         <Routes>
            <Route path="/" element={ <CountriesList countriesArr={countries}></CountriesList> } />
            <Route path="/:alpha3Code" element={
              <>
                <CountriesList countriesArr={countries}></CountriesList>
                {/* see comments in the component about the callback */}
                <CountryDetails callbackGetCountry={getCountry} countriesArr={countries}></CountryDetails>
              </>
            } />
          </Routes>

        </div>
      </div>   
    </div>
  );
}

export default App;
