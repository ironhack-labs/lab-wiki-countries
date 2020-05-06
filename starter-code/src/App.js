import React, { Component } from 'react'
import countries from './countries.json'
import { Switch, Route, Link } from 'react-router-dom'
import CountryDetail from './CountryDetail/CountryDetail'

class App extends Component {

  constructor() {
    super()
    this.countriesCopy = [...countries]
    this.state = {
      countries: this.countriesCopy
    }
  }
  render() {
    return (
      <>
        <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-5">
                  <div className="list-group">
                    {
                      this.state.countries.map((elm, idx) => {
                        return (
                          <Link className="list-group-item list-group-item-action" key={idx} to={elm.cca3}>{elm.flag} {elm.name.common}</Link>
                        )
                      })
                    }
                  </div>
                </div>
                <Switch>
                  <Route path="/:cca3" exact render={(props) => <CountryDetail {...props} />} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default App