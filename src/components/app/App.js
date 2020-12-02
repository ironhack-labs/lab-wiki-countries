import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../navbar/Navbar.js';
import CountriesList from '../countries/CountriesList.js';
import CountriesDetails from '../countries/CountriesDetails.js';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (

    <div className="App">
      <Navbar />

      <div class="container flex">
        <div class="row">

          <CountriesList />
        </div>

        <div>
          <Switch>
            <Route path="../countries/:cca3" component={CountriesDetails} />
          </Switch>
        </div>

      </div>
    </div>
  );
}

export default App;
