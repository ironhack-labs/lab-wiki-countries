import React from 'react';
import countryInfos from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: null,
    borders: [],
  };

  componentDidMount() {
    const country = countryInfos.find(
      (country) => country.cca3 === this.props.match.params.country
    );

    if (country) {

      let selectedCountry = { ...country };
      this.setState({
        name: selectedCountry.name.common,
        capital: selectedCountry.capital,
        area: selectedCountry.area,
        borders: selectedCountry.borders,
      });
    }
  }

//   componentDidUpdate(prevProps, prevState) {
//     const country = countryInfos.find(
//       (country) => country.cca3 === this.props.match.params.country
//     );

//     let selectedCountry = { ...country };

//     if (prevState.cca3 !== country.cca3) {
//       this.setState({
//         name: selectedCountry.name.common,
//         capital: selectedCountry.capital,
//         area: selectedCountry.area,
//         borders: selectedCountry.borders,
//       });
//     }
//   }

  render() {
    return (
      <div className="col-7">
        <h1>{this.state.name}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.state.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.area}
                {' km ²'}
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.borders.map((item, index) => (
                    <li key={index}>
                      <Link to={`/${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
