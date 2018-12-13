import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./components/home/Home";
import Countries from "./components/countries/Countries"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/countries" component={Countries}/>
  </Switch>
)

export default Routes