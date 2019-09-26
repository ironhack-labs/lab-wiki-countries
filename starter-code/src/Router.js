import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import CountryDetails from './pages/CountryDetails.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:cca3" component={CountryDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
