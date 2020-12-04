import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

//import the components
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount = () => {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((res) => this.setState({ countries: res.data }));
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route
                path="/:countryCode"
                render={(props) => (
                  <CountryDetails countries={this.state.countries} {...props} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
