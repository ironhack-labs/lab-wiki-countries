import React from 'react';

import { Route, Switch}     from "react-router-dom";
import CountryDetail from "./Component/CountryDetail";

const Router  = () => (
  <Switch>
    <Route exact path="/countrydetail/:id" component={CountryDetail}  />
  </Switch>
)
export default Router;