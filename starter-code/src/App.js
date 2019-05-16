import React, { Component, Fragment } from 'react';
import countries from './countries'
import CountryBox from './components/CountryBox';
import CountryDetails from './components/CountryDetails'
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  state = {
    countries,
    filteredCountries: countries
  }

  showAllCountries = () => {
    let show = this.state.filteredCountries.map((country, i) => {
      return <CountryBox name={country.name.common} code={country.cca3} flag={country.cca2} key={i} />
    })
    return show
  }

  countryDetails = () => {
    return <CountryDetails {...this.state.countries} />

  }

  search = (e) => {
    let filter = this.state.countries.filter((country) => {
      return country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredCountries: filter
    })
  }


  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="navbar-brand">WikiCountries</div>
              </div>
              <div className="col">
                <input className="form-control bg-dark text-white" type="search" onChange={this.search} placeholder="Search for country..."></input>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5 listItems">
              {this.showAllCountries()}
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/country/:id" component={(props) => <CountryDetails  {...props} countries={this.state.countries} />} />
              </Switch>
            </div>
          </div>
        </div>
      </Fragment >
    );
  }
}

export default App;
