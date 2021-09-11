import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import loadingImg from './Assets/loading.gif';

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
        <Navbar />
        {this.state.countries.length >= 1 ? (
          <div>
            <div className="App-container container">
              <CountriesList countries={this.state.countries} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <h3 className="mx-5 mt-3">
                      <strong>
                        <u>Please select a country</u>
                      </strong>
                    </h3>
                  )}
                />
                <Route
                  path="/:country"
                  render={(routeProps) => (
                    <CountryDetails
                      {...routeProps}
                      countries={this.state.countries}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        ) : (
          <img src={loadingImg} alt="Loading" />
        )}
      </div>
    );
  }
}

export default App;
