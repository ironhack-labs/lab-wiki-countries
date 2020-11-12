import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {
    countries: []
  }

    componentDidMount = async () => {
    console.log('SE HA MONTADO EL TEMA')
    const countries = await fetch("https://countries.tech-savvy.tech/countries")
    const res = await countries.json()

    this.setState({ countries: res})
    }

    render() {
  return (
    <div className="App">
      <Navbar />
      <div class="side-info">
      <CountriesList />

      <Switch>
      <Route exact path='/:cca3' render={(routerProps) => <CountryDetails {...routerProps} />} />
      </Switch>
      </div>
    </div>
  );
}}


export default App;
