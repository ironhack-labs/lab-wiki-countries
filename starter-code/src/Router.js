import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import CountryDetail from './pages/CountryDetail.js';

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:cca3' component={CountryDetail}/>
        </Switch>
      </BrowserRouter>
    );
}


export default Router;