import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail';
import ShowCountry from './components/ShowCountry';
// import countries from './countries.json';
import axios from "axios";
import {Switch, Route} from 'react-router-dom';


export default class App extends Component {
constructor (props) {
  super(props)
  this.state = {
    countries: []
    }
}
  componentDidMount() {
    axios.get("https://countries.tech-savvy.tech/countries")
    .then(response =>{
      this.setState({countries:response.data})
    })
  }
render() {
  return (
    <div className = "App">
    <Navbar/>

    <div className="container">
        <div className="row ">
          <div className="col-5 countries scrollbar scrollbar-info">
            <div className="list-group force-overflow">
            {this.state.countries.map(country =>(
            <CountryDetail
              key={country.name.common}
              code={country.cca3}
              flag={country.flag}
              name={country.name.common}  
              
            />     
            ))
            }
          </div>
          </div>
          <div className="col-7">

          <Switch>
               <Route path="/:country" component={ShowCountry}/>
          </Switch>

            </div>
      </div>


      
  </div>  
  </div>

  )}}
