import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detail from './components/Detail'
import App from './App'

function Router() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={App} />
      <Switch>
        <Route exact path='/detail/:country' component={Detail}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router