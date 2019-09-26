import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:cca3" component={CountryDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
