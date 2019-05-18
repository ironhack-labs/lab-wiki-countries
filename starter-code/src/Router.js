import React from "react";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

const Router = () => (
  <Switch>
    <Route
      exact
      path="/detail/:id"
      render={props => <CountryDetail {...props} />}
    />
  </Switch>
);

export default Router;
