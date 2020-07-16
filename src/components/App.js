import React from 'react';

// import { Switch, Route } from 'react-router-dom'

import Navbar from './Nav/Nav'
import CountriesList from './CountriesList/CountriesList'
// import CountryDetail from './CountryDetail/CountryDetail'



function App() {
  return (
    <>
      <Navbar />

      <div className="row">

        <CountriesList />

      </div>

    </>
  );
}

export default App;
