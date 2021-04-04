import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Data from './countries.json';
import { Component } from 'react';
import CountriesList from './components/CountriesList/CountriesList.jsx';
import { Route, Switch } from 'react-router';
import CountryDetails from './components/CountryDetails/CountryDetails';

export default class App extends Component {
  state = {
    countries: Data,
  };
  render() {
    console.log(Data);
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5 countriesColu">
              <CountriesList countries={this.state.countries} />
            </div>
            <div className="col-7 infoCountry">
              <Switch>
                <Route
                  exact
                  path="/:id"
                  render={(historyProps) => {
                    return (
                      <CountryDetails
                        {...historyProps}
                        countries={this.state.countries}
                      />
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
