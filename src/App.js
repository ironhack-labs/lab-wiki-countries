import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList.js'
import CountryDetail from './components/CountryDetail.js'
import { Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CountriesList />
      <Switch>
        <Route path="/:id" component={CountryDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
