import React, { Component } from 'react';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import countries from '../countries.json';

export default class WikiCountries extends Component {
  state = {
    countries: countries,
  };
  componentDidMount() {
    console.log('component did mount');
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {/* <!-- Bootstrap container wrapper div --> */}
        <div className="container">
          {/* <!-- Bootstrap row wrapper div --> */}
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <CountryDetails
              countries={this.state.countries}
              countryId={this.props.match.params.id}
            />
          </div>
        </div>
      </div>
    );
  }
}
