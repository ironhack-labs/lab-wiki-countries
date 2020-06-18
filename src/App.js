import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';


export default class App extends React.Component {



  render() {
    return (<div>
      <Nav />
      <CountriesList />
      <Switch>
        <Route exact path="/" component={CountryDetail} />
        <Route path="/:countryCode" component={CountryDetail} />
      </Switch>

    </div>
    );
  }
}


