import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: countries,
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="container">
          <div class="row">
            <CountriesList />
            <Switch>
              <Route
                exact
                path="/:countryId"
                render={(reactRouterProps) => (
                  <CountryDetails
                    {...reactRouterProps}
                    countries={this.state.countries}
                  />
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
