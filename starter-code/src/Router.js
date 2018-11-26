import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CountryDetail from './components/CountryDetail/CountryDetail'

const Router = () => (
    <Switch>
        <Route path="/CountryDetail/:id" component={CountryDetail}/>
    </Switch>
);

export default Router;