import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route path="/contacts" component={CountryDetail} />
      </Switch>
    </div>
  );
}
