// Iteration 2 | Linking it all together

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import countries from '../countries.json'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'



class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }


  // Iteration 3 | Set the state when the component mounts
  componentDidMount = () => this.setState ({ countries: countries })


  render() {
    return (
      <>
        
      <Navbar />

        <main>
          <div className="container marginOff">
            <div className="row">
              
              <section className="countryListSection">
                <CountriesList />
              </section>

              <section className="detailsSection">
                
                {/* Iteration 1.4 | CountryDetails Route setup */}
                <Switch>
                  <Route path="/countries/:cca3" render={props => <CountryDetails {...props} />} />
                </Switch>

              </section>

            </div>
          </div>
        </main>
        
      </>
    )
  }
}

 

export default App
