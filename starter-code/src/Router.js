
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CountriesDetail from './pages/countries_detail'
import App from './App'
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/countries/:id" component={CountriesDetail} />
        <Route exact path="/" component={App} />
        <Route component={()=><h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router