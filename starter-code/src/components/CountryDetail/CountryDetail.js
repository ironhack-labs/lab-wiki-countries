import React, { Component } from "react";
import { Link } from "react-router-dom";
import countriesJSON from './countries.json';

class CountryDetail extends Component {
  render() {

    const country = countriesJSON.find(country => country.cca3 === this.props.match.params.cca3)
      
    return (

      <div >
        <div >
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead />
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
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
                  <ul>
                    {country.borders.map((country, index) => (
                      <li key={index}>
                        <Link to={country.cca3}>
                          {country.name.common}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    );
  }
}

export default CountryDetail;


