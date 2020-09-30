import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryData from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container m-2">
        <div className="row ">
          <CountriesList />
          <Switch>
            <Route exact path="/:id/details" component={CountryData} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
