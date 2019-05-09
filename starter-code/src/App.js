import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import countries from './countries.json'
import Card from './components/Card'
import CardDetails from './components/CardDetails'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  state = {
    allCountries: countries
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                {this.state.allCountries.map(country => {
                  console.log(country.name.common)
                  return (
                    <Card
                      name={country.name.common}
                      flag={country.flag}
                      id={country.cca3}
                    />
                  )
                })}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/card/:id" component={CardDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
