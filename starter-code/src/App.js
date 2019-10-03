import React, { Component } from 'react';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import countries from "./countries.json";
import CountryDetails from "./components/CountryDetails";
import { Switch, Route, Link } from 'react-router-dom';


class App extends Component {

  state = {
    countries
  }

  showCountries = () => {
    const allCountries = this.state.countries.map((eachCountry,i) => {
        return (
        <Link className="list-group-item list-group-item-action" key={i} to={`/country/${eachCountry.cca3}`}> {eachCountry.flag} { eachCountry.name.official } </Link>
        )
    })
    return allCountries
  }

  render() {

    return (
      <div className='App'>
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
                  {this.showCountries()}
                </div>
              </div>

              <Switch>
                <Route exact path="/country/:id" component={CountryDetails}/>
              </Switch>
              {/* <CountryDetails countryInfo={this.state.countries}/> */}


            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default App;
