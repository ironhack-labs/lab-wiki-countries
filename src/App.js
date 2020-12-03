import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import CountriesDetails from './components/CountriesDetails';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/project/:countrieName"
          component={CountriesDetails}
        />
        <Route exact path="/countrieslist" component={CountriesList} />
      </Switch>
    </div>
  );
}

export default App;
