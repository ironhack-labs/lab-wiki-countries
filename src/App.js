import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/countryDetails/CountryDetails.js';

class App extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    axios.get("http://206.189.7.127/countries/")
    .then(response => {
        this.setState({countries: response.data})
    })
}

  listCountries = () => {
    const { countries } = this.state;
    return countries.map((country, index) => {
      const code = country.cca3;
      return <Link 
        key={`${country.name.official}-${index}`}
        className="list-group-item list-group-item-action" 
        to={`/${code}`}
        >
        {country.flag}{country.name.official}
        </Link>
    });
  };

  render() {  
    return (
      <div className="App">
        <Router>
          <div className="container margin-top">
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-5">
                  <div className="list-group">
                    {this.listCountries()}
                  </div>
                </div>
                <div className="col-7 sticky">
                  <Route path="/:id" component={CountryDetails} />
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
