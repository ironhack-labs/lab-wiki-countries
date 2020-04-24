import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { Link } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCountries: countries,
    }
  }

  render() {
    return (
      <div className="Wikipedia">
        <nav className="navbar">
          <h2 className=""></h2>
        </nav>
        <div className="list">
         <div className="list-each-country">
          {this.state.listCountries.map((country, index) => <Link className="" to={country.cca3} key={index}> {country.flag} {country.name.official}</Link> )}
         </div>
        </div>
      </div>

    )
  }
}

export default App;
