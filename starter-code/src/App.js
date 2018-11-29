import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

class App extends Component {
    
  constructor(props) {
    
    super(props);

    this.state = {
     countries
    };

    // this.addRandomContact = this.addRandomContact.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Navbar title="WikiCountries"/>
        <div className="container">
          <div className="row">
            <Country countries={this.state.countries}/>

            <Switch>
              <Route exact path="/:id" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
