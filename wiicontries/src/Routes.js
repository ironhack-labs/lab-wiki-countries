
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CountryDetail from './Components/CountryDetail'


const Routes = () => {
    return (
        <Switch>

            <Route path="/detail/:id" component={CountryDetail} />

        </Switch>
    )
};

export default Routes