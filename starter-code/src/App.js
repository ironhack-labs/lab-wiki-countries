import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';

//style
import './App.css';

//pages
import CountryDetail from './pages/CountryDetail';

//app
class App extends Component {
  state = {
    countries: [],
    error: null
  }

  componentDidMount() {
    axios.get("https://countries.tech-savvy.tech/countries")
         .then((res) => {
           this.setState({countries: res.data})
         })
         .catch((err) => {
          this.setState({error: err.message})
         })
  }

  selectCountry = (countryName) => {
    let countries = document.getElementsByClassName('list-group-item');
    for (let i = 0; i < countries.length; i++){
      countries[i].classList.remove('active');
    }

    let selectedLink = document.getElementById(countryName);
    selectedLink.classList.add('active');
  }

  render() {
    return (
            <div className="App">
              <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                  <Link to={'/countries'} className="navbar-brand">WikiCountries</Link>
                </div>
              </nav>
              <div className='container'>
                <div className="row">
                  <div className="col-5">
                      <div className="list-group">
                          {this.state.countries.length === 0 ? <h1>Loading..</h1> : ""}
                          {this.state.error ? <h1>{this.state.error}</h1> : ""}
                          {this.state.countries.map((country, index) => {
                            return (
                                <Link 
                                  key={index}
                                  to={`/${country.cca3}`} 
                                  className="list-group-item list-group-item-action" 
                                  onClick={() => {this.selectCountry(country.name.common)}}
                                  id={country.name.common}
                                >{country.flag} {country.name.common}</Link>
                            )
                          })}
                      </div>
                  </div>
                  <Switch>
                      <Route path="/:cca3" render={(props) => <CountryDetail {...props} countries={this.state.countries}/>} />
                  </Switch>
                </div>
            </div>
          </div>
    )
  }
};

export default App;
