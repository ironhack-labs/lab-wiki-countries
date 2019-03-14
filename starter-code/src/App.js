import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import ListCountries from './components/ListCountries'
import SingleCountryView from './components/SingleCountryView'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: null
    }
    this.showCountry = this.showCountry.bind(this);
  }
  showCountry(event) {
    var countryCode = event.currentTarget.id;
    var selectedCountry = countries
                        .find(country => country.cca3 === countryCode);
    this.setState({
      selectedCountry: selectedCountry
    });
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
              <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <ListCountries showCountry={this.showCountry} countries={countries} />
              </div>
              <div className="col-7">
                <SingleCountryView country={this.state.selectedCountry} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
