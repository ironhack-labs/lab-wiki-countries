import './App.css';
import NavBar from './NavBar'
import countries from './countries.json'
import { Route } from 'react-router-dom'
import { Component } from 'react';
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }

  render() {

    return (
      <div>
        <NavBar></NavBar>
        <div className='container'>
          <div className='row'>
            <CountriesList></CountriesList>
            <Route exact path='/:cca3' render={props => <CountryDetails countries={countries} {...props}></CountryDetails>}></Route>
          </div>
        </div>

      </div>
    )
  }
  
}

export default App;
