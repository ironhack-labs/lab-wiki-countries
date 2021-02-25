import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

// import countriesData from './countries.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.CountryFilter = this.CountryFilter.bind(this);
    this.countryChangeHandler = this.CountryFilter.bind(this);
    this.state = {
      countries: [],
      // country: this.CountryFilter("DEU")
      country: null,
      isDataLoaded: false
    }
  }

  CountryFilter(code) {
    return this.state.countries.find(country => country.alpha3Code === code);
  }

  countryChangeHandler(code) {
    // console.log("get called")
    const country = this.CountryFilter(code);
    this.setState(() => ({
      country: country
    }));
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => this.setState({countries: data, isDataLoaded: true}))
      .then(() => {
        const country = this.CountryFilter("DEU");
        this.setState(() => ({
          country: country
        }));
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries}/>
            <Switch>
              <Route exact path="/:code" render={(props) => (
                this.state.isDataLoaded ? <CountryDetails {...props} country={this.state.country} countryChangeHandler={this.countryChangeHandler}/> : null
              )} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
