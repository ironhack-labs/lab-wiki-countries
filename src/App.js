import React from 'react';
import './App.css';
import countriesList from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    countriesArr: countriesList,
  };
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="main-content">
            <CountriesList countriesArr={this.state.countriesArr} />

            <Switch>
              <Route
                path="/country/:id"
                render={(routeProps) => {
                  const countrySelected = this.state.countriesArr.find(
                    (country) => country.cca3 === routeProps.match.params.id
                  );
                  return (
                    <CountryDetails
                      {...countrySelected}
                      countriesArr={this.state.countriesArr}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
