import React from 'react'
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from './components/CountryDetail'
const Routes = () => (
    //switch just use the components of the router that you are using
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/country/:id' component={CountryDetail}/>
    </Switch>)

export default Routes