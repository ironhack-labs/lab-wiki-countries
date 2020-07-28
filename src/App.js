import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      countries: [],
      countryDetail: {
        name: '',
        capital: '',
        area: '',
        borders: [],
      },
    };
  }
  componentDidMount() {
    // Buscar los Datos API
    // Axios
    axios.get('https://restcountries.eu/rest/v2').then((response) => {
      this.setState({ countries: response.data });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <CountriesList />
              <Switch>
                <Route
                  path="/:countryCode"
                  render={(props) => <CountryDetail {...props} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
