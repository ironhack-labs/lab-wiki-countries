import './App.css';
import Navbar from './components/Navbar';
import Links from './components/Link';
import Router from './components/Router';
// import countries from './countries.json';
import { getCountries } from './components/services/BaseService';
import React, { Component } from 'react';

class App extends Component {
  state = {
    countries: [],
    loading: true
  }

  componentDidMount() {
    getCountries()
    .then(countries => this.setState({ countries, loading: false }))
  }

  render() {
    const {countries} = this.state
    return (
      <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overFlow: 'scroll' }}
          >
            <div className="list-group">
              {countries.map((c) => (
                <Links key={c.alpha3Code} {...c} />
              ))}
            </div>
          </div>
          <Router countries={countries}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;