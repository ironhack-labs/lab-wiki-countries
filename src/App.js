import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-main-page">
        <CountriesList />

        <Switch>
          {/* el props que usamos en CountryDetails.js est le CountryDetails ci-dessous */}
          <Route exact path="/country/:cca3" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
