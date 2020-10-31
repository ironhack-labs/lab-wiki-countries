import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json';
import {Route} from  'react-router-dom'
import CountryDetails from './components/CountryDetails/CountryDetails'
import axios from 'axios'

export default class App extends Component {
 
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get('https://countries.tech-savvy.tech/countries')
    .then((result) => {
      console.log(result)
      this.setState({
        countries: result.data
      })
    })
  }

  render() {
  return (
    <div id="root">
      <div>
        <Navbar />
        <Route path='/' />
      </div>
    <div className="container">
      <div className="row">
        <CountriesList countries={countries} />
        <Route path="/:cca3" render= {(props) => <CountryDetails countries={countries} {...props} /> } />
      </div>
    </div>
    </div>
  )
  }

}
