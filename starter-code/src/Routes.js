import React from "react";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";

const Routes = () =>  (
  <Switch>
    <Route exact path="/" component={() => <h1>WikiCountries</h1>} />
    <Route exact path="/detail/:id" component={CountryDetail} />
  </Switch>
)

export default  Routes;