import { Component } from 'react'
import './App.css';
import Navbar from './Navbar'
import countriesJson from './../countries.json'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { Route } from 'react-router-dom'

class App extends Component {

  constructor() {
    super()
    this.state = {
        countries: '',
    }
  }

  componentDidMount() {
    this.setState({ countries: countriesJson })
  }

  render() {
    return (
    <main>
      <Navbar title="WikiCountries"/>
      <Route exact path="/:id" render={props => <CountryDetails {...props}/>} />
      <CountriesList/>
    </main>

  )
  }
}

export default App;
