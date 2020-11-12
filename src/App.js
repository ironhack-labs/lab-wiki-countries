import React, {Component} from 'react';
import './App.css';
import countries from './countries.json'
import Navbar from './Navbar';
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  countriesList = countries;

  render() {

    return (
      <>
      <Navbar />
      <div className="container" style={{paddingTop: '25px', paddingBottom:'25px'}}>
        <div className="row">
          <CountriesList countries={this.countriesList} />
          <Switch>
            <Route exact path='/:id' component={CountryDetails}/>
          </Switch>
        </div>
      </div>
      </>
    );
  }
}

export default App;
