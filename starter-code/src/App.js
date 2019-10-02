/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import countries from './countries';
import Country from './Country';
import Details from './Details';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      countries : countries
    }

    
  }
  render(){
  return (
    <div className="App">
    
        <div className="col-5">
        <Country countries={this.state.countries}></Country>
      {/*   <BrowserRouter exactpath="/countries/:chosenCountry"
        render={props => {
          var chosenCountry = props.match.params.chosenCountry;
          return (
            <Details
            country={this.state.countries[chosenCountry]}
            ></Details>
          )
        }}
        >
        </BrowserRouter> */}
        </div>
        <div className="col-7"
        >
          
      
        <BrowserRouter exact path='/:country' render={props => {
          console.log("holi")
          let selectedCountry = this.state.countries.filter(country => {
            return country.cca3 === props.match.params.country;
          })
          
          return(
            <Details {...selectedCountry[0]}></Details>
          )
        }}></BrowserRouter>
 
        </div>
    
   
    </div>
  );
}
}

export default App;
