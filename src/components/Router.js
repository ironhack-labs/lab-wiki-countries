import { Route, Switch } from "react-router-dom";
import CountryDetails from './CountriesList/CountryDetails/CountryDetails'
import React from 'react';

class Router extends React.Component{
render(){
  return (
    <Switch>
      <Route exact path="/:code" component={CountryDetails} />
 
    </Switch>
  );
}
}

export default Router;