import React, { Component } from 'react'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'

import countries from '../countries.json'
import CountriesList from './CountriesList'
import CountryDetail from './CountryDetail'
import Nav from './Nav'



class App extends Component {
  constructor() {

    super()
    const countriesCopy = [...countries]
    this.state = {countries: countriesCopy}
  }

  render() {
    return (
      <div id="root">
        <div>
          <Nav/>
          <div class="container">
            <div class="row">
              <CountriesList countries={this.state.countries} />
              <Switch>
                <Route path="/:cca3" exact render={(props) => {
                 
                  const country = this.state.countries.find((elm) => props.match.params.cca3 === elm.cca3)
                 
                  return <CountryDetail countries={this.state.countries}{...country}/>
                }} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
