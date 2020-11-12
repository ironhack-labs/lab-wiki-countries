import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries = {countries}/>
        </div>
      </div>
    <Switch>
      <Route exact path='/:cca3' component = {CountryDetails} />
    </Switch>
    </div>
  );
}
export default App;