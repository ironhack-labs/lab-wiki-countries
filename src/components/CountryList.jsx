import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

export class CountryList extends Component {
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
      <div class="container">
        <div class="row">
          <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div class="list-group">
              {this.state.countries.map((country) => (
                <Link
                  to={`/country/${country.cca3}`}
                  key={country.cca3}
                  class="list-group-item list-group-item-action "
                  exact
                >
                  <img
                    src={
                      'https://www.countryflags.io/' +
                      country.cca2 +
                      '/flat/64.png'
                    }
                    alt="Flag Country"
                    class="flag"
                  />
                  {country.name.common}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      /* <div>
        <ul>
          
        </ul>
      </div> */
    );
  }
}

export default CountryList;
