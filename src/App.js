import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <CountriesList />
        <Switch>
          <Route exact path="/:cca3" component={CountryDetail}/>
        </Switch>
      </div>
    )
  }
}
