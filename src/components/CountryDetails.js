import { Component } from 'react';
// import countryList from '../countries';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateCountryBorderElements(countryList, borders) {
    const countryArray = [];
    borders.forEach((cca3) => {
      const countryBorder = countryList.find((el) => el.cca3 === cca3);
      countryArray.push(
        <li>
          <Link
            to={`/${countryBorder.cca3}`}
          >
            {countryBorder.name.common}
          </Link>
        </li>
      );
    });

    return countryArray;
  }

  render() {
    if (!this.props.countries) {
      return null
    }
    const countryCode = this.props.match.params.cca3;
    const country = this.props.countries.find((el) => el.cca3 === countryCode);
    const countryBorderElements = this.generateCountryBorderElements(
      this.props.countries,
      country.borders
    );
    return (
      <>
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{countryBorderElements}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default CountryDetails;
