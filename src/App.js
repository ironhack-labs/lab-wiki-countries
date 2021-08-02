import React, { Component } from "react";
import NavBar from './components/NavBar.js';
import CountriesList from './components/CountriesList.js'
import CountryDetails from './components/CountryDetails.js'
import {Route, Switch} from "react-router-dom";

import countriesData from './countries.json';

export class App extends Component{
  state =   {
    countries: [],
  }

  componentDidMount(){
    this.setState({
      countries: [...countriesData]
    })
  }
  render(){
    return(
      <>
      <NavBar/>
      <div className="d-flex">
        <CountriesList countries = {this.state.countries}  />
        <Switch>
          <Route path='/country-details/:code' render={(routeProps) =>{
            return ( <CountryDetails {...routeProps} countries={this.state.countries}/>
            )
          }}/>            
        </Switch>
      </div>
      </>
    )
  }
}
export default App;
