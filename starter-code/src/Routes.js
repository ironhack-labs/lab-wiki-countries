import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import CountryDetail from './components/CountryDetail';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/country/:id" component={CountryDetail} />
    </Switch>
)

export default Routes
