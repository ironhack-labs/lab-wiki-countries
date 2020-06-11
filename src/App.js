import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

function App() {
  return (
    <div className="App">
<Route exact path="/countries-list" component={CountriesList}></Route>
<Route exact path="/country-detail/:cca3" component={CountryDetail}></Route>
    </div>
  );
}

export default App;
