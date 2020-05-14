import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <CountriesList />
          </div>
          <Route exact path="/:cca3" component={CountryDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
