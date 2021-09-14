import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import './App.css';

class App extends Component {

  state = {
    countries: []
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        this.setState({ countries: [...res.data] });
      })
      .catch((e) => console.error(e));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App__Components">
          <CountriesList countries={this.state.countries} />
          <Switch>
            <Route
              path="/countries/:alpha3code"
              exact
              render={(routeProps) => (
                <CountryDetails {...routeProps} countries={this.state.countries} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
