import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    const { countries } = this.props;
    return (
      <>
        {this.props.countries.map((country, i) => {
          return (
            <div class="overflow-auto" key={i}>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: '30px' }}
                />
                <Link to={`/country-details/${country.alpha3Code}`}>
                  {country.name}
                </Link>
              </p>
            </div>
          );
        })}
      </>
    );
  }
}

export default CountriesList;
