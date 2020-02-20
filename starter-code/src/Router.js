import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/styled/Nav'
import Home from './pages/home'
import NotFound from './pages/not_found'
import Characters from './pages/characters'
import CharacterDetail from './pages/character_detail'
import App from './App'

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        {/* <Route exact path="/detail/:country" component={Characters} /> */}
        <Route exact path="/" component={App} />
        <Route exact path='/detail/:country' component={Detail}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router