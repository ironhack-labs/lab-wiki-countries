import React from "react";
import {Switch, Route} from "react-router-dom";
import FlagCard from "./components/FlagCard";

const Routes = () => (
    <Switch>
        <Route exact path="/:id" component={FlagCard}/>
    </Switch>
);

export default Routes;