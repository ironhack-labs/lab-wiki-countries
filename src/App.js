import Navbar from './components/Navbar';
// import countries from './countries.json';
import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    countries: [],
  };

  getCountriesData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data });
      });
  };

  componentDidMount() {
    this.getCountriesData();
  }
  render() {
    console.log(this.state.countries);
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
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
