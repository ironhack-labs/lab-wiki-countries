import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import CountriesList from './components/CountriesList';
import axios from "axios";
import {Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';


class App extends Component {

  state = {
    countries: []
  }

    async componentDidMount(){
        let response = await axios.get('https://restcountries.eu/rest/v2/all')
        this.setState({
            countries: response.data
        })
    }

  render(){
    return (
      <div>
        <Navbar />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <CountriesList countries={this.state.countries}/>
          <Route path={'/:countryId'}  component={CountryDetails} />
        </div>
      </div>
    )
  }
}

export default App;
