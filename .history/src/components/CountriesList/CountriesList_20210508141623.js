import React from 'react';
import countriesList from '../../countries.json';
import "./CountriesList.css";

//class
class CountriesList extends React.Component {
  state = {
    countries: countriesList,
  };

  displayCountries = () => {
      return this.state.countries.map((country) => {
          return (
            <Link to={`/${country.cca3}`} key={country.cca3}>
            {country.flag} {country.name.common}
          </Link>
          )
      })
  }

  render() {
    return (
      <div>
        <div class="countries-list">
          {this.displayCountries()}
        </div>
      </div>
    );
  }
}

export default CountriesList;
