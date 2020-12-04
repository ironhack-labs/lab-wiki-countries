import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';
import axios from 'axios';
import countriesData from './countries.json';
import './App.css';

const countryService = axios.create({
  baseURL: 'https://countries.tech-savvy.tech/countries'
})

export default class App extends Component {
  state = {
    countries: [],
    loading: true
  }

  componentDidMount = () => {
    countryService.get().then(res => {
      this.setState({
        countries: res.data,
        loading: false
      })
    })
    // this.setState({
    //   countries: countriesData
    // })
  }
  
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
        <Navbar />

        <div className='container'>
          <div className='row'>
            <CountriesList countries={this.state.countries} />
            <Route 
              exact
              path='/:cca3'
              render={(reactRouterProps) => {
                return <CountryDetails {...reactRouterProps} countries={this.state.countries} />
              }}
            />
          </div>
        </div>

      </div>
    )
  }
}
