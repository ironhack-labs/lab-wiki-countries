import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import CountryDetail from './components/CountryDetail'
import CountryContainer from './components/CountryContainer'


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CountryContainer}/>
        <Route path="/country/:id" component={CountryDetail}/>
      </Switch>

      </BrowserRouter>
  )
}

export default Router
