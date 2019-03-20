import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import countries from './countries.json'
import CountryDetail from './components/CountryDetail'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
                {
                countries.map(element => {
                  return (
                    <Link className="list-group-item list-group-item-action" key={element.cca3} to={`/country/${element.cca3}`}>
                      {element.flag} {element.name.official}
                    </Link>
                  )
                })
                }
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path='/country/:cca3' component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App