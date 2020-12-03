import './App.css';
import React, { Component } from 'react'
import countries from './countries.json'
import Navigation from './Navbar'
import CountriesList from './CountriesList'
import { Switch, Route, Redirect } from 'react-router-dom'
import CountriesDetails from './CountriesDetails'
import 'bootstrap/dist/css/bootstrap.css'



class App extends Component {
  constructor() {
    super()
    this.state = {
      countries
    }
  }

  render() {

    return (
      <div>
        <Navigation />

          <main>
            
            <Switch>
            <Route path='/' exact render={() => <CountriesList />} />
            <Route path='/:cca3' render={props => <CountriesDetails {...props} />} />
            </Switch>
          </main>
      </div >
    )
  }


}




export default App;
