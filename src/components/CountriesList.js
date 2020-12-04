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
      <div>
        {this.state.countries.map((country) => {
          return (
            <Link to={`/${country.cca3}`} key={country.cca3}>
              <p>
                {country.flag}
                {country.name.common}
              </p>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
