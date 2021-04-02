import React from 'react';
import {Route,  Switch} from 'react-router-dom';
import CountryDetails from './CountryDetails';
import Enlace from './Enlace';

function AppRouter () {

    console.log('Approuter')
    return (
        <Switch>
            <Route exact path='/enlace' component={Enlace} />

            <Route exact path='/:cca3' component={CountryDetails}/>
       
            
        </Switch>
    )
}
export default AppRouter;