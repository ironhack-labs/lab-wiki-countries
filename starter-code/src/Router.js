import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/Detail'

function Router() {
  return (

    <BrowserRouter>
      <Switch>  
      
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default Router
