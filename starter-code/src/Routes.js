import React from 'react'
import {Route,Switch} from 'react-router-dom'
import CountryDetail from './components/CountryDetail';


const Routes = () =>(
  <Switch>
    <Route  path='/:cca3' component={CountryDetail}/>
  </Switch>
)

export default Routes