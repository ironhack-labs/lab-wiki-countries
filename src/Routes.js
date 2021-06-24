import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CountryDetails from './Components/CountryDetail'
const Routes = () => (
    <Switch>
        <Route exact path="/details" component={CountryDetails}/>
    </Switch>
);

export default Routes;