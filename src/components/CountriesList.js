import { Component } from 'react';
// import countryList from '../countries';
import {Link} from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateCountryList(countryList) {
    const countryArray = [];
    countryList.forEach((country) => {
      countryArray.push(
          <>
        <Link
          to={`/${country.cca3}`}
          class="list-group-item list-group-item-action"
        >
          <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} height="20px" width="20px" />
          {country.name.common}
        </Link>
        </>
      );
    });

    return countryArray;
  }

  render() {
    if (!this.props.countries) {
      return null
    }
    const countryElements = this.generateCountryList(this.props.countries);
    return (
        <div class="list-group">{countryElements}</div>
    );
  }
}

export default CountriesList;
