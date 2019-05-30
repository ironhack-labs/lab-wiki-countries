import React from "react";
import { Route, Switch } from "react-router-dom";
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