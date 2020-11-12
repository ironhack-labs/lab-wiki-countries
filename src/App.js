import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Switch, Route } from "react-router-dom"
// import Countries from "./countries.json"
import axios from "axios"

// export const countries = Countries

class App extends Component {
   state= {
    countries: []
   }
   componentDidMount = async() => {
     const countries = await axios.get("https://countries.tech-savvy.tech/countries")
     this.setState({
       countries: countries.data
     }
     )
   }
  render() {
   return (
    <div className="App">
      <Navbar />
      <div className="container">
          <div className="row country-list">
      <CountriesList countries= {this.state.countries}/>
      <Switch>
      <Route exact path='/:cca3' component={CountryDetails}/>
      </Switch>
        </div>
      </div>

  
    
      <Route exact path='/' component={CountriesList}/>
  

    </div>
  )
   }  
}

export default App;
