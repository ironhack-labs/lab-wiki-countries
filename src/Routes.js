import React from 'react';
import {Switch, Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';

const Routes = () => (
    <Switch>
        <Route exact path="/:id" component={CountryDetails}/>
    </Switch>
)

export default Routes;