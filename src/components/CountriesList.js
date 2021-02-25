import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  state = { countries: [] };

  componentDidMount = () => {
      this.setState( {countries: countries} )
  }
    
  render() {
    return (
      <div>
        {this.state.countries.map((country) => {
          return <Link key={country.cca3}
            className="list-group-item list-group-item-action"
            to={`/${country.cca3}`}>{country.name.common} {country.flag}
          </Link>
        })}
      </div>
    );
  }
}
export default CountriesList;