import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Countries List</span>
        </div>      
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <CountriesList />
          </div>
            <Route exact path="/:cca3" component={CountryDetail}/>
        </div>
      </div>
    </div>
  );
}

export default App;
