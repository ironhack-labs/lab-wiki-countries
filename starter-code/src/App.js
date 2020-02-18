import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import CountryDetail from './Components/CountryDetail'
import './App.css';
import countries from './countries.json'

class App extends Component {

  state = {
    countries// Same thing ===> countries:countries
  }


  showCountryLinks = () => {
    let countryList = [...this.state.countries]
    return countryList.map(eachCountry => {
      return <Link key={eachCountry.cca3} to={`/country-detail/${eachCountry.cca3}`} className="list-group-item list-group-item-action" ><img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`}></img>{eachCountry.name.common}</Link>
    })
  }

  render() {

    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                {this.showCountryLinks()}
              </div>

              <div className="col-7">
                <Switch>
                  <Route exact path="/country-detail/:id" render={(props) => <CountryDetail {...props} countries={this.state.countries} />} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;