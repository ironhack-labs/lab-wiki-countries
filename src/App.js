import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>

  <div className="container">
    <div className="row">

      <Route path="/" component={CountriesList} />
      <Route path="/:id" component={CountryDetails} />

    </div>
  </div>


</div>
  );
}

export default App;
