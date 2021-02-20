import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'
import {Link, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  state = {
    countries: countries
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <div className='row'>
            <CountriesList countriesList={this.state.countries} />
            <Switch>
              <Route path='/:countryCode' render={ props => {
                return <CountryDetails {...props} countriesList = {this.state.countries} />
              }}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
