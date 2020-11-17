import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Switch>
        <Route path="/countries/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
