import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container flex">
        <div class="row">
            <CountriesList />
        </div>
        <div class="col-7">
          <Switch>
            <Route path="/countries/:cca3" component={CountryDetails} />
          </Switch>
        </div>  
      </div>
    </div>
  );
}

export default App;