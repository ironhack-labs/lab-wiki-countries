import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{
                maxHeight: '90vh',
                overflow: 'scroll',
                textAlign: 'left',
              }}
            >
              <div className="list-group">
                <CountriesList countries={countries} />
              </div>
            </div>

            <Switch>
              <Route
                path="/countries/:id"
                render={(routeProps) => {
                  let country = countries.find(
                    (country) => country.cca3 === routeProps.match.params.id
                  );

                  return (
                    <CountryDetails
                      country={country}
                      countries={this.state.countries}
                      {...routeProps}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
