import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDeatails';
import { Route, Link, Switch } from 'react-router-dom';
import countries from './countries.json';

class App extends React.Component {
  state = {
    list: [],
  };

  componentDidMount = () => {
    this.setState({
      list: countries,
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="country__list">
          <div className="listing">
            <CountriesList listOfCountries={countries} />
          </div>
          <div className="results">
            <Switch>
              <Route
                exact
                path="/:name"
                render={(routeProps) => (
                  <CountryDetails {...routeProps} countryDetails={countries} />
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
