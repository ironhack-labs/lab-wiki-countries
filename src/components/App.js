import React, { Component } from 'react'
import './App.css';
import Navbar from './navbar/Navbar';
import CountriesList from './countriesList/CountriesList';
import CountryDetails from './countryDetails/CountryDetails';

import { Switch, Route, Redirect } from 'react-router-dom';

import allCountries from '../countries.json';


class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }

  // getApiUserDetails() {
  //   const apiUrl = `https://restcountries.eu/#api-endpoints-all`;
  //   console.log('getApi called!!!')
  //   return  fetch(apiUrl, {
  //     method: 'GET',
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then((json)=>{
  //     console.log('countries in fetch json', json)
  //     return json
  //   })
  //     .catch(err => {throw err})
  // };

  componentDidMount(){
    this.setState({countries: allCountries})
  }

  render(){
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-5" >
            <div className="list-group">
              <CountriesList className="list-group-item list-group-item-action" countries={this.state.countries} />
            </div>
          </div>

          <div className="col-7">
            <Switch>
                {this.state.countries.map((country, idx)=> <Route path="/:id" key={idx} render={(props) => <CountryDetails {...props} />} />)}
                
            </Switch>
          </div>

        </div>
      </div>

    </>
  );}
}

export default App;
