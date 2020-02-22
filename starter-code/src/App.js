import React, { Component } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './views/CountryDetails';
import ApiHandler from './api/api';
import {Switch, Route} from 'react-router-dom';

const api = new ApiHandler();

export default class App extends Component {
state = {
  listCountries: [],
  selectedCountry:'yoyoyo'
}
componentDidMount(){
  api.get()
  .then(apiRes => this.setState({listCountries : apiRes.data}))
}

  render() {
    return (
      <div className="App">
        <nav className='navbar navbar-dark bg-primary'>
          <div className='navbar-brand'>WikiCountries</div>
        </nav>
        <div className='flex'>
        <CountriesList list={this.state.listCountries}/>
        <Switch>
          <Route path='/:code' render={(routeProps)=>(<CountryDetails {...routeProps} example={this.state.listCountries}/>)}/>
        </Switch>
        </div>
      </div>
    )
  }
}
