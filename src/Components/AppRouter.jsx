import React from 'react';
import {Route,  Switch} from 'react-router-dom';
import CountryDetails from './CountryDetails';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/:id' component={CountryDetails}/>

            
        </Switch>
    )
}
export default AppRouter;