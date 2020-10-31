import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Link } from 'react-router-dom';

export default class App extends Component {
  state = {
    countries: ''
  }

  componentDidMount() {
    this.setState({countries: countries})
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={{ display: 'flex' }}>
          <CountriesList data={countries} />
          <Route
            path="/:id"
            render={(props) => <CountryDetails {...props} data={this.state.countries} />}
          />
        </div>
      </div>
    );
  }
}
