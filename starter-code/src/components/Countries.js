import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import CountriesNav from './CountriesNav';
import CountryDetail from './CountryDetail';
import Loading from './Loading';
import Error from './Error';

const DATA_URL = 'http://raw.githubusercontent.com/mledoze/countries/master/countries.json';
const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class Countries extends Component {
  state = {
    countries: [],
    status: STATUS.LOADING,
    error: undefined,
  };

  componentDidMount() {
    fetch(DATA_URL)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        else return response.json();
      })
      .then(countries => this.setState({ countries, status: STATUS.LOADED }))
      .catch(error => this.setState({ error: error.message, status: STATUS.ERROR }))
  }

  render() {
    const { countries, status, error } = this.state;
    console.log('countries', countries);
    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <Loading />
      case STATUS.LOADED:
        return <CountriesNavAndDetail countries={countries} />
      case STATUS.ERROR:
        return <Error error={error} />
    }
  }
}

const CountriesNavAndDetail = ({ countries }) => {
  return (
    <div className='container'>
      <div className='row'>
        <CountriesNav countries={countries} />
        <Switch>
          <Route path='/:id' render={(props) => <CountryDetail {...props} countries={countries} />}/>
        </Switch>
      </div>
    </div>
  )
}
