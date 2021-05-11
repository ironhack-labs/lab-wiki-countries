import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Route exact path="/"><CountriesList /></Route>
        </div>
        <div>
          <Route path="/:id" component={CountryDetails} />
        </div>
      </div>
    );
  }

}

export default App;
