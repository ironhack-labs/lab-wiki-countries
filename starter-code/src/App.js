import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Countries from './countrie/Countries';
import CountryDetail from './countrie/CountryDetail';


function App() {
  return (
<>
<nav className="navbar navbar-dark bg-primary mb-3">
  <div className="container">
      <a className="navbar-brand" href="/">WikiCountries</a>
  </div>
</nav>
<Switch>  
  <div className="row">
    <div className="col-4">
      <Route path="/" component={Countries} />
    </div>
    <div className="col-8">
      <Route path="/:id" component={CountryDetail} />
    </div>
    </div>
</Switch>
</>
  );
}

export default App;

