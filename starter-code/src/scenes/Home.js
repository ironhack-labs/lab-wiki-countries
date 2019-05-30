import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import CountryDetails from '../components/CountryDetails'
import countries from '../countries.json'
import { Switch, Route } from 'react-router-dom';

class Home extends React.Component {
  state = {
    countries: countries
  }

  render(){

    const list = countries.map((country, i) => <Link key={i} className="list-group-item list-group-item-action" to={`/${country.cca3}`}><span role="img" aria-label={country.cca2} key={i}>{country.flag} </span>{country.name.official}</Link>)

    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                  {list}
                </div>
              </div>
              <Switch>
                <Route exact path="/:cca3" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home