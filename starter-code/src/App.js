import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { CountryDetail } from './components/CountryDetail';
import { Link } from "react-router-dom";
import countries from './countries.json';

function App() {

  const countriesList = countries;

  return (
    <div className="App">
      <div class="list-group">
        {countriesList.map( e => <Link to={`/${e.cca3}`} className="list-group-item list-group-item-action">{e.name.common}</Link>)}
      </div>
      <Switch>
        <Route path='/:cca3' component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
