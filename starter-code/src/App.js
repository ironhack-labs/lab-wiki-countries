import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import CountryDetail from './components/country-detail/CountryDetail';

class App extends Component {
  constructor() {
    super();
    this.state ={
      countriesList :[],
    };
    this.countriesList = this.countriesList.bind(this);
  }

  componentDidMount() {
    axios.get("http://206.189.7.127/countries/")
    .then(response => {      
      this.setState({countriesList: response.data})
    })
  }

  countriesList() {
    return this.state.countriesList.map((obj, idx) => {
      return <Link to={`/${obj.cca3}`} key={idx} className="list-group-item list-group-item-action">{obj.flag} {obj.name.common}</Link>
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
                {this.countriesList()}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route path="/:id" render={(props) => <CountryDetail {...props} countriesList = {this.state.countriesList} />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
