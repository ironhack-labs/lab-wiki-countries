import React from "react";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail/CountryDetail";

const Router = () => (
  <Switch>
    <Route path="/:countrie" component={CountryDetail} />
  </Switch>
);

export default Router;
