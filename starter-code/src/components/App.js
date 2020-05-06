import React,{ Component} from 'react'
import countries from '../countries.json' 
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
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
      <div id="root">
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" >
            <div className="list-group">
              {this.state.countries.map((elm, idx) => { 
                return (
                  <Link key={idx} className="list-group-item list-group-item-action" to={elm.cca3}>{elm.flag} {elm.name.common}</Link> 
                )
              })}
              <Switch>
              <Route path="/:code" exact render={props => <CountryDetail {...props} />}>
              

              </Route>

              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    )
  }

}

export default App