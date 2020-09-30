import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flexDisplayed">
        <CountriesList countries={countries}/>
        <Switch>
          <Route exact path="/country/:cca3" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
