import { Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Home from './Pages/Home'
import Countries from './Pages/Countries'
import Country from './Pages/Country'
import NotFound from './Pages/NotFound'
import JSONcountries from './countries.json'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      countries: JSONcountries
    }
  }


  render() {
    return (
      <div className="App">
        <header>
  
          <NavBar/>
  
        </header>
  
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/countries"  >
              <Countries countries={this.state.countries}/>
            </Route>
            <Route exact path="/country/:id">
              <Country countries={this.state.countries} />
            </Route> 
            <Route component={NotFound} />
          </Switch>
          
        </main>
  
      </div>
    )
  }
}

export default App;
