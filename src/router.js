import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

const Router = () => (
  <BrowserRouter>
    <div id="root">
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <CountriesList></CountriesList>
            <Switch>
              {/* <Route exact path="/" component={CountriesList} /> */}
              <Route exact path="/:countryId" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
