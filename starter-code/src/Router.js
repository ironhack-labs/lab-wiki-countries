import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import React from 'react'
import CountryDetails from './components/CountryDetail';

const Router = () => {
    return (
       <BrowserRouter>
       <Switch>
       <Route exact path="/country-detail" component={CountryDetails} />
       </Switch>
       </BrowserRouter> 
  )
}

export default Router
