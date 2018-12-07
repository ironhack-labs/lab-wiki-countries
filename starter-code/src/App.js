import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      allCountries: countries,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">  
          <div className="row bg-primary text-white">
            <h2>Wiki Countries</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
          <CountryList countries={this.state.allCountries} />
          </div>
          <div className="col-md-8">
            <Switch>
              <Route exact path="/country/:common" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
