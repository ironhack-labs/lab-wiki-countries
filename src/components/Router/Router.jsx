import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Country from '../Countries/Country';
import NotFound from '../NotFound/NotFound';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/detail/:name/country" component={Country} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
