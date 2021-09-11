import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: [],
  };
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
        {this.state.countries.length >= 1 ? (
          <div>
            <Navbar />
            <div className="App-container">
              <CountriesList countries={this.state.countries} />
              <Route
                path="/:country"
                render={(routeProps) => (
                  <CountryDetails
                    {...routeProps}
                    countries={this.state.countries}
                  />
                )}
              />
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
