import React, {Component} from 'react';


import { Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json'
import axios from 'axios';



export default class App extends Component {

  state = {
    countries: []
  }

  componentDidMount() {
    axios.get('https://countries.tech-savvy.tech/countries')
    .then((response) => {
      console.log(response)
      this.setState({
        countries: response.data
      })
    })
  }

  render() {
    
    return (
      <div id="root">
        <div>
          <Navbar/>
          <Route path='/'/>
        </div>
        <div className="container">
          <div className="row">
            <CountriesList countries=
            {countries}/>
             <Route path="/:cca3" render= {(props) => <CountryDetails countries={countries} {...props} />} />
          </div>
        </div>
      </div>
    )
  }
}