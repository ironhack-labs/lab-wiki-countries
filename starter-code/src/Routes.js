import React from 'react'
 import {Route,Switch} from 'react-router-dom'
 import CountryDetail from './components/CountryDetail';


 const Routes = () =>(
   <Switch>
     <Route exact path='/:id' component={CountryDetail}/>
   </Switch>
 )

 export default Routes