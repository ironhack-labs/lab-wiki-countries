import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  render() {
    const FindCountry = countries.find((x) => {
      return x.cca3 === this.props.match.params.cca3;
    });
    console.log(FindCountry);
    return (
      <div>
        <table className="table">
          <h1>{FindCountry.name.common}</h1>
          <tbody>
            <tr>
              <td scope="row" style={{ width: '30%' }}>
                Capital
              </td>
              <td>{FindCountry.capital}</td>
            </tr>
            <tr>
              <td scope="row">Área</td>
              <td>{FindCountry.area}km²</td>
            </tr>

            <tr>
              <td scope="row">Borders</td>
              <td colspan="2">
                <ul>
                  {FindCountry.borders.map((x) => {
                    const countryName = countries.find((y) => {
                      return y.cca3 === x;
                    });
                    return (
                      <li>
                        <Link to={x}>{countryName.name.common}</Link>
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
