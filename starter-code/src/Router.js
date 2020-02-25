import React from 'react'
import CountryDetail from './components/CountryDetail'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <App />
      <Switch style={{display: 'flex', flexDirection: 'row'}}>
        <Route exact path='/detail/:country' component={CountryDetail}/>
      </Switch>
    </BrowserRouter>
    )
}

export default Router
