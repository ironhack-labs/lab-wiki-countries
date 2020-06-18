import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CountryDetail from './CountryDetail';
import axios from 'axios';

export default class CountriesList extends Component {

    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
        .then((response) => {
            this.setState({countries: response.data});
        });
    }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div class="list-group">
                {
                    this.state.countries.map((country, index) => {
                        return (<Link to={`/${country.cca3}`} key={index} className="list-group-item list-group-item-action">
                        <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={'flag'}/>
                        {country.name.common}
                        </Link>);
                    })
                }
              </div>
            </div>
            <CountryDetail countries={this.state.countries} cc={this.props.match.params.cc}/>
          </div>
        </div>
      </div>
    );
  }
}
