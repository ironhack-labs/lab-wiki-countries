import React from 'react'
import {Route,Switch} from 'react-router-dom'
import CountryDetail from './components/CountryDetail'


//se configuran 2 cosas las rutas y los componentes a usar
const Routes = ()=>{
  return (  
    <Switch>
      <Route path='/:id' component ={CountryDetail} />
    </Switch>
  )
}

export default Routes