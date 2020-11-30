import React from 'react';

import {Switch,Route}  from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';


const Routes = () => (
    <Switch>
        <Route exact path="/" component ={()=><h1>Hola</h1>}/>
        <Route exact path="/detail" component ={CountryDetails} />
      </Switch>
)

export default Routes;