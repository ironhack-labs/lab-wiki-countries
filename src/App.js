import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row text-left">
          <div className="col-5 list-container">
            <CountriesList />
          </div>
          <div className="col-7">
            <Route exact path="/countries/:id" component={CountryDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
