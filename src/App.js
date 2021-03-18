import './App.css';
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import countriesJSON from './countries.json';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {  
    this.setState({ countries: countriesJSON });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <CountriesList countries={countriesJSON} />
        <Switch>
          <Route 
          exact 
          path="/:id" 
          render={(historyProps) => {
            return <CountryDetails {...historyProps} />
          }}
          />
        </Switch>
      </div>
    )
  }
}

export default App
