import React, { Component } from 'react';
import countries from './countries.json';
import { Route, Link } from "react-router-dom";
import CountryDetail from './components/CountryDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCountries: countries,
    }
  }


  render() {
    return (
      //example.html 
      <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
        <div class="container">
          <div class="row">
            <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div class="list-group">
                {this.state.showCountries.map((country, index) => 
                <Link to={country.cca3} key={index} class="list-group-item list-group-item-action">
                {country.flag}{country.name.common}</Link>)}
              </div>
            </div>
              <Route exact path='/:id' component={CountryDetail} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;