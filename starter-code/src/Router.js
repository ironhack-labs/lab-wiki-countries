import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ShowDetails from "./components/Detail/ShowDetails";
import Home from "./components/Home/Home";

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/countries/:id' component={ShowDetails}/>
    </Switch>
);

export default Router;