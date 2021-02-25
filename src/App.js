import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React, { Component } from 'react'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error'
import countries from './countries.json'

class App extends Component {
  constructor() {
    super();

    this.state = {
     countriesList: [],
    };
  }

  getCountryData = () => {
    console.log('hola')
    this.setState({ countriesList: countries })
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <CountriesList countries={this.state.countriesList} />

        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/countries" component={CountriesList} exact />
          <Route path="/countries/:idOfTheCountry" component={CountryDetails} exact />

          <Route component={Error} />
        </Switch>

      </BrowserRouter>
    </div>
    )
  }

  componentDidMount() {
    console.log("======== componentDidMount");
    this.getCountryData();
  }

}

export default App;
