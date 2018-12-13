import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./components/home/Home";
import Countries from "./components/countries/Countries"
import CountryInfo from "./components/countries/CountryInfo";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/countries" component={Countries}/>
    <Route path="/country-list/:name" component={CountryInfo}/>
  </Switch>
)

export default Routes