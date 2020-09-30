import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <div className="flexDisplayed">
        <CountriesList countries={countries} />
        <Switch>
          <Route exact path="/country/:cca3" component={CountryDetails}/>
        </Switch>
      </div>
    </main>
  );
}

export default App;
