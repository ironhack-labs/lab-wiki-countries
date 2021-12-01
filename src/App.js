import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import countriesArr from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      countries: countriesArr,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row justify-content-around">
            <CountriesList />
            <Switch>
              <Route
                path="/countrydetails/:cca3"
                render={(props) => <CountryDetails {...props} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
