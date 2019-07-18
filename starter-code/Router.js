import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CountryDetail from './src/components/CountryDetail';
import CountryList from './src/components/CountryList';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CountryList}></Route>
      <Route exact path="/:id" component={CountryDetail}></Route>
    </Switch>
  </BrowserRouter>
)


export default Router