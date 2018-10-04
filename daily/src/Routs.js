import React from 'react'
import {Route,Switch} from 'react-router-dom'
import PaisDisplay from './components/PaisDisplay'

const Routs =() =>{
  
  return(
    <Switch>
      <Route path="/:id" component={PaisDisplay} />
    </Switch>
  )
}

export default Routs