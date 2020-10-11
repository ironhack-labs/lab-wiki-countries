import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';
import countries from './countries.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    this.saveCountries();
  }

  saveCountries() {
    this.setState({
      countries
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries}/>
            <Route path='/' />
            <Route path='/country-details/:countryName' component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
