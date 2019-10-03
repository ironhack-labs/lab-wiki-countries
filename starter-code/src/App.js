import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ListOfCountries from './components/ListOfCountries';
import CountryDetail from './components/CountryDetail';
import Countries from './countries.json';


class App extends Component {


  state = {
    chosen: {
      name: 'here!!!!'
    },
    countries: Countries
  }


  findCountryByCca3 = (cca3) => {
    for (let country of this.state.countries) {
      if (country.cca3 === cca3) {
        return country
      }
    }
    return undefined
  }

  render() {
    return (
      <div className="App">

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
                  <ListOfCountries />
                </div>
              </div>

              {/* <CountryDetail chosenCountry={this.state.chosen} /> */}



              <Switch>
              {/* <Route/> */}
              <Route exact path='/:id' component={(props)=> <CountryDetail countryInfo={this.findCountryByCca3(props.match.params.id)} findBorderCountry={this.findCountryByCca3}/>}/>

              </Switch>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default App;
