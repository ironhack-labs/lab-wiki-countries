import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { Link , Route } from 'react-router-dom';
import CountryDetail from './Components/CountryDetail'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCountries: countries,
    }
  }

  render() {
    return (
      <div className="Wiki">
        <nav className="navbar navbar-dark bg-primary mb-3">
        <a class="navbar-brand" href="/">WikiCountries</a>
        </nav>
        <div className="container">
         <div className="row">
         <div className="col-5 list-group scroll">{this.state.listCountries.map((country, index) => <Link className="list-group-item list-group-item-action" to={country.cca3} key={index}> {country.flag} {country.name.official}</Link> )} </div>
         </div>
           <Route exact path="/country" component={CountryDetail}></Route>
        </div>
      </div>

    )
  }
}

export default App;
