import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detail from './components/Detail'
import App from './App'

function Router() {
  return (
    <BrowserRouter>
        <App />
      <Switch style={{display: 'flex', flexDirection: 'row'}}>
        <Route exact path='/detail/:country' component={Detail}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router