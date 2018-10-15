import React from 'react'
import {Route,Switch} from 'react-router-dom'
import CountryDetail from './compononents/CountryDetail.js'

const Routes = ()=>{
 return (
   <Switch>
     <Route exact path='/detail/:id' component ={CountryDetail} />
   </Switch>
 )
}

export default Routes