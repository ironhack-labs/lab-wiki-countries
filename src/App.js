import Navbar from './components/Navbar';
// import countries from './countries.json';
import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />

            <Switch>
              <Route
                path="/countries/:countryId"
                component={CountryDetails}
                exact
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
