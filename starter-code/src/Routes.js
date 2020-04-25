import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

const Routes = () => (
    <Switch>
        <Route exact path="/detail" component={ CountryDetail } />
    </Switch>
)

export default Routes;