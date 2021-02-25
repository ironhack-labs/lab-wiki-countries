import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount = () => {
    this.setState({ countries: countries });
  };

  render() {
    return (
      <div>
        <Navbar className="navbar" />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
              <Route
                path="/countries/:countryId"
                component={CountryDetail}
                countries={countries}
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
