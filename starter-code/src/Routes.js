import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/country/:cca3" component={CountryDetail} />
  </Switch>
);

export default Routes;
