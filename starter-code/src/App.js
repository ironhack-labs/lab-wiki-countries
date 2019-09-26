import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import CountryDetail from './components/CountryDetail'
import countries from './countries.json'

export default class App extends Component {
  state = {
    countries
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">WikiCountries by Ironhack</span>
        </nav>
        <Switch>
          <Route exact path="/:id" component={CountryDetail} />
        </Switch>
        <div>
          <ul>
            {countries.map((name, index) => {
              return (
                <li key={index}>
                  <Link to={`/${name.cca3}`}>
                    <p>
                      {name.name.common} {name.flag}
                    </p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
