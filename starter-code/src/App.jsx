import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryDetailView from './views/CountryDetail';
import AllCountries from './components/AllCountries';
import countries from './countries';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar bg-primary sticky-top">
          <Link className="navbar-brand text-white" to="/">
            WikiCountries
          </Link>
        </nav>
        <div className="row">
          <div id="scroll" className="col-5">
            <AllCountries countries={countries} />
          </div>
          <div id="details" className="col-7">
            <Switch>
              <Route exact path="/" />
              <Route path="/country/:id" component={CountryDetailView} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
