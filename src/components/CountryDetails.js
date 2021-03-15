import React from 'react';
import { Route, Link } from 'react-router-dom';
import countries from '../countries.json';
// use{...} for

class CountryDetails extends React.Component {
  state = {
    country: {},
  };

  componentWillReceiveProps(props) {
    let cca3 = props.match.params.cca3;

    let country = countries.find((eachCountry) => eachCountry.cca3 === cca3);

    this.setState({
      country,
    });
  }

  render() {
    return (
      <div className="col-7">
        <h1>{this.state.country.name?.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30% ' }}>Capital</td>
              <td>{this.state.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.country.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.country.borders?.map((eachBorder) => {
                    let countryName = countries.find(
                      (eachCountry) => eachBorder === eachCountry.cca3
                    );

                    console.log(countryName);

                    return (
                      <li key={eachBorder}>
                        <Link to={`/country/${eachBorder}`}>
                          {countryName.name.common}
                        </Link>
                      </li>
                    );
                  })}
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