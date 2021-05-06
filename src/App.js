import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import Home from './components/Home';
import countriesData from './countries.json';

export default class App extends Component {
  state = {
    countries: []
  }
  componentDidMount() {
    this.setState({
      countries: countriesData
    })
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries}></CountriesList>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/:id" render={(props) => <CountryDetails {...props} countries={this.state.countries}/>} />
            </Switch>
          </div>
        </div>
      </>
    )
  }
}
