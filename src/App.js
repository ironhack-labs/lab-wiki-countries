import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
        <div className="container">
          <div className="row">
            <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}> 
              <CountriesList countries={countries}/>
            </div>
            <div className="col-7">
              <Route exact path="/:cca3" component={CountryDetails} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
