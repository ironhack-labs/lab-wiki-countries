import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CountriesList} />
      <Route exact path="/:countryId" component={CountryDetail} />
    </Switch>
  </BrowserRouter>
);

export default Router;
