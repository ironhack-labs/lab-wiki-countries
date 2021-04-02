import React from 'react';
import {Route,  Switch} from 'react-router-dom';
import CountryDetails from './CountryDetails';

function AppRouter () {

  
    return (
        <Switch>
     

            <Route exact path='/:cca3' component={CountryDetails}/>
       
            
        </Switch>
    )
}
export default AppRouter;