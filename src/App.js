import React from 'react';
import './App.css';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route path="/countries/:cca3" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
