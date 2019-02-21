import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import countries from './countries.json'
import './App.css';
import CountryDetails from './components/countryDetails/CountryDetails.js';

class App extends Component {
  state = {
    countries: [...countries],
  }

  listCountries = () => {
    const { countries } = this.state;
    return countries.map((country) => {
      const code = country.cca3;
      return <li> <Link to={`/${code}`}>{country.flag}{country.name.official}</Link> </li>
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => {
            return(
              <div className="App">
                <ul>
                  {this.listCountries()}
                </ul>
              </div>
            )
          }}>
          </Route>
          <Route path="/:id" component={CountryDetails} />
        </Switch>
      </Router>
    );
  }
}

export default App;
