import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends Component {
  state = {
    countries: [],
  };

  componentDidMount = () => {
    this.setState({
      countries: countries,
    });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div class="list-group">
              {this.state.countries.map((country) => {
                return (
                  <Link
                    to={`/${country.cca3}`}
                    key={country.cca3}
                    class={'list-group-item list-group-item-action'}
                  >
                    <p>
                      {country.flag}
                      {country.name.common}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
