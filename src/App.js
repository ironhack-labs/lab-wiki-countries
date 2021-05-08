import './App.css';
import React from 'react'
import axios from "axios"
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Link, Switch, Route, Redirect } from "react-router-dom";


import countries from './countries.json'

class App extends React.Component  {
  state = {
    allCountries: []

  }

componentDidMount() {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then((result)=>{
    this.setState({...this.state, allCountries:[...result.data]})
  })
  .catch((error)=>{
    console.log(error)
  })
  
}


  render(){
    return (
      <div className="App">
       <NavBar />
       <Switch>
         <Route path='/countrydetails/:alpha3Code' component={routeProps=> <CountryDetails {...routeProps} countries={this.state.allCountries} />} />
       </Switch>
       <CountriesList allCountries={this.state.allCountries} />
      </div>
    )
  }
}

export default App;
