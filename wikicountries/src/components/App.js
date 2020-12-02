import React, { Component } from 'react'
import countries from './countries.json';
import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import { Switch, Route, Redirect } from 'react-router-dom'
import CountryDetails from './CountryDetails';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }

  render() {
    return (
          <div className="App">
            <Navbar />
            <main>
      
            <div className="container">
              <div className="row">
                
                <Switch>
                  
                <Route path ="/" exact render = {() =>   <CountriesList/>} />
                  <Route path="/:cca3" render={props => <CountryDetails {...props} />} />
                  
              </Switch>
              </div>
              </div>
              </main>
            </div>
        )
  }
}


export default App;
