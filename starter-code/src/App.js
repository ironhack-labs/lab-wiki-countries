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
        <nav className="navbar">
          <h2 className="">WikiCountries</h2>
        </nav>
        <div className="list">
         <div className="list-each-country">
          {this.state.listCountries.map((country, index) => <Link className="" to={country.cca3} key={index}> {country.flag} {country.name.official}</Link> )}
         </div>
           <Route exact path="/country" component={CountryDetail}></Route>
        </div>
      </div>

    )
  }
}

export default App;
