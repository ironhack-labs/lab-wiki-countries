import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Detalles from './Detalles'

function Router() {
  return (
    <BrowserRouter>
        <App />
      <Switch>
        <Route exact path='/Detalles/:contri' component={Detalles}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router