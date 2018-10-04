import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CountryDetail from  './components/CountryDetail'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/detail/:id' component={CountryDetail}/>
    </Switch>
  )
}

export default Routes