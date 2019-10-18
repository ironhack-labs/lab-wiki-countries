import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import axios from 'axios';
// import countriesList from './countries.json';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      error: null
    }
  }


  componentDidMount() {
    axios
      .get("https://countries.tech-savvy.tech/countries")
      .then(response => {
        this.setState({ countries: response.data });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })

  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div className="list-group">
                <div className="list-group-item list-group-item-action">
                  {this.state.countries.lenght === 0 ? <h1>Loading</h1> : ''}
                  {this.state.error ? <h1>{this.state.error}</h1> : ''}
                  {this.state.countries.map(country =>
                    // <h1>{country.name.common}</h1>
                    <Link className="list-group-item list-group-item-action"
                      to={`/countries/${country.cca3}`}>
                      {country.name.common}
                    </Link>
                  )}
                </div>



              </div>
            </div>
            <div className="col-7">
              <div>
                <Route path="/countries/:countryCode" component={CountryDetail} />
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default App;
