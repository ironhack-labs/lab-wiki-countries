import React, { Component } from 'react';
import { Link, Route, Switch} from 'react-router-dom'
import './App.css';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail'

class App extends Component {
  state = {
    countries: countries
  }
  render() {
    return (
      <div className="App">
        <h1>WikiCountries</h1>
        <section>
          <Link to={`/${country.cca3}`}></Link>
        </section>
      </div>
    );
  }
}

export default App;
