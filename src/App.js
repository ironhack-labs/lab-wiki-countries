import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './Components/CountriesList';
import countriesInfo from './countries.json';
import CountryDetails from './Components/CountryDetails';

function App() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    setCountriesList(countriesInfo);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="hello">
        <CountriesList countryInfo={countriesList} />
        <Switch>
          <Route path="/countrydetails/:id" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
