import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: null,
  };

  componentDidMount() {
    this.setState({ countries: countries });
  }

  render() {
    if (this.state.countries) {
      return (
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-5">
                <CountriesList countries={this.state.countries} />
              </div>
              <div className="col-7">
                <Switch>
                  <Route exact path="/:id" component={CountryDetails} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
