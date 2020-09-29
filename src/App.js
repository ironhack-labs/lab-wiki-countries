import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries} />
          <Switch>
            <Route exact path="/:ecc3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>



  );
}

export default App;
