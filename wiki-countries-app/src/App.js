import React from 'react';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountriesDetails from './components/CountryDetails'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              <Route path="/" render={() => <CountriesList />} />
            </div>
          </div>
          <div className="col-7">
            <Route path="/:cca3" render={(props) => <CountriesDetails {...props} />} />

          </div>

        </div>
      </div>


    </>
  );
}

export default App;
