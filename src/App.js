import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import React from 'react';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((resp) =>
        this.setState({
          countries: resp.data,
        })
      )
      .catch((error) => console.error(error));
  }

  render() {
    if (this.state.countries.length === 0) return <h3>Loading...</h3>;
    console.log('render');

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <CountriesList countries={this.state.countries} />
            </div>
            <div className="col-7">
              <Route exact path="/countries/:id">
                <CountryDetails countries={this.state.countries} />
              </Route>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
