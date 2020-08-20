import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
// import CountryDetails from './components/CountryDetails'
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Navbar/>

    <div className="container">
      <div className="row">
        
      <CountriesList />
      <Switch>
        <Route exact path="/:cca3" component={CountryDetails} />
      </Switch>
        </div>
      </div>
  </div>
  );
}

export default App;
