import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }
  
  componentDidMount() {
    this.setState({
      countries: countries
    }); 
  }

  render() {
    return <div className="App">
      <Navbar />

      <div className="container countries-container">
        <div className="row countries">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route exact exact path="/:id" render={routeProps => {
                const requestedCountry = countries.find(country => {
                  return country.cca3 == routeProps.match.params.id;
                });
                return <div><CountryDetails countries={countries} {...requestedCountry} /></div>
                }} />
            </Switch>
        </div>
      </div>
    </div>
  }
}

export default App;
