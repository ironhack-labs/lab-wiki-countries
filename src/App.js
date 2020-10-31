import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
// import countries from './countries.json';
import {Route} from  'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import axios from 'axios';

const API_URL = 'https://countries.tech-savvy.tech/countries';

export default class App extends Component {
 
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get(API_URL)
    .then(response => {
      // console.log(response)
      this.setState({
        countries: response.data
      })
    })
  }

  // componentDidMount() {
  //   fetch(API_URL)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //     this.setState({
  //       countries: data
  //     })
  //   })
  // }

  render() {
    // console.log('render')

    if(this.state.countries && this.state.countries.length < 1){
      return <h1>loading</h1>
    }

    return (
      <div id="root">
        <div>
          <Navbar />
          <Route path='/' />
        </div>
      <div className="container">
        <div className="row">
          <CountriesList countries={this.state.countries} />
          <Route path="/:cca3" render= {(props) => <CountryDetails countries={this.state.countries} {...props} /> } />
        </div>
      </div>
      </div>
    )
  }

}
