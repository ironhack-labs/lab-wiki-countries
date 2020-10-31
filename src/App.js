import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import Countries from "./countries.json"
import CountryDetails from './components/CountryDetails'


class App extends Component{

  state = {
    countries: ''
  }

  componentDidMount() {
    this.setState({countries: Countries})
    console.log('Did Mount!')
  }

  
  render(){
      return (
        <div className="App">
          <NavBar />
          <Route path='/'/>
            <div className='container'>
              <CountriesList countries={Countries} />
              <Route path='/country/:countryId' render={(props) => <CountryDetails {...props} countries={this.state.countries}/>}/>
              </div>
        </div>
      )
  }
}

export default App;
