import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path='/:cca3' component={CountryDetail} />
          </Switch>
        </div>
      </div>


    </div>
  );
}

export default App;
