import React from 'react'
import './App.css'
import CountryDetail from './CountryDetail'
import NavBar from './NavBar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {

  return (
    <div className='App'>
      {/*<header className='App-header'></header>*/}
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/CountryDetail/:cca3' component={CountryDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
