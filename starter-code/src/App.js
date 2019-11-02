import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CountryDetail from './components/CountryDetail'
import { Switch, Route } from 'react-router-dom'
import ListOfCountries from './components/ListOfCountries';
import countries from './countries.json'

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <div className="row">
          <ListOfCountries countries={countries} />
          <Switch>
            <Route exact path='/:cca3' render={(props) => <CountryDetail {...props} countries={countries} /> }/>
          </Switch>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
