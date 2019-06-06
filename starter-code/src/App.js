import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/NavBar'
import {Switch, Route} from 'react-router-dom'
import CountryDetail from './Components/CountryDetail'

class App extends Component {
  render() {
    return (
      <main>
        <NavBar/>

        <Switch>
          <Route exact path='/:id' component={CountryDetail}/>
        </Switch>
      </main>    
    )
  }
}

export default App
