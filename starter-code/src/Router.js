import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import CountryDetail from "./CountryDetail/CountryDetail";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/countries/:countrie" component={CountryDetail} />
  </Switch>
);

export default Router;
