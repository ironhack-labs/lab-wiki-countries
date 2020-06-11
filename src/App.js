import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Switch>
    <Route exact path='/' component={CountriesList}></Route>
    <Route exact path='/:country' component={CountryDetail} />


    </Switch>

    </div>
  );
}

export default App;
