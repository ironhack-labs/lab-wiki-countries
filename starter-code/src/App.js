import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'
import { listCountries as ListCountries } from './components/ListCountries';
import CountryDetails from './components/CountryDetails'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main>
      <NavBar/>
      

      <Switch>
          <Route path='/' exact component={ListCountries} />
          <Route path="/:id" exact component={CountryDetails} />

      </Switch>
      
      </main>
    );
  }
}

export default App;
