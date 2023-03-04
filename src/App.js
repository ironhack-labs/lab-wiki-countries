import dataCountries from '../src/countries.json';
import { useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Navbar, CountriesList, CountryDetails} from './components'

function App() {
  const [countries, setCountries] = useState(dataCountries);
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row-countries">
                  <div className="global-card">
                  {
                    countries.map((country,index_country) =>(
                  <CountriesList
                      key={index_country}
                      name = {country.name}
                      alpha2Code = {country.alpha2Code}
                      alpha3Code = {country.alpha3Code}
                  />
                  ))
                  }
                  </div>
                  <div className="country-details">
                      <Routes>
                        <Route 
                          path='/countryDetails/:countryId' 
                          element={ <CountryDetails
                                    countries = {countries}
                                    />
                                  } 
                        />
                      </Routes>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default App;