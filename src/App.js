import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.CountryFilter = this.CountryFilter.bind(this);
    this.countryChangeHandler = this.CountryFilter.bind(this);
    this.state = {
      countries: [],
      country: this.CountryFilter("DEU")
    }
  }

  CountryFilter(code) {
    return countries.find(country => country.cca3 === code);
  }

  countryChangeHandler(code) {
    console.log("get called")
    const country = this.CountryFilter(code);
    this.setState(() => ({
      country: country
    }));
  }

  componentDidMount() {
    this.setState({countries: countries});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries}/>
            {/* <CountryDetails country={this.state.country} countryChangeHandler={this.countryChangeHandler}/> */}
            <Switch>
            {/* <Route exact path="/:code" countryChangeHandler={this.countryChangeHandler} component={CountryDetails}/> */}
              <Route exact path="/:code" render={(props) => (
                <CountryDetails {...props} country={this.state.country} countryChangeHandler={this.countryChangeHandler}/>
              )} />
            </Switch>
            {/* <CountryDetails country={CountryFilter("AFG")} countryFilter={CountryFilter}/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
