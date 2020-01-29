import React from 'react'
import './App.css'
import CountryDetail from './CountryDetail'
import SideBar from './SideBar'
import NavBar from './NavBar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='App'>
          <SideBar />
          <Switch>
            <Route exact path='/CountryDetail/:cca3' component={CountryDetail} />
            <Route exact path='/' />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
