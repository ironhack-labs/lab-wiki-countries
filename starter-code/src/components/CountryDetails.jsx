import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  render() {
    var country = this.props.countries
      ? this.props.countries.find(oneCountry => {
          return oneCountry.name.common === this.props.match.params.name;
        }) || { undefined }
      : undefined;

    console.log(country);

    return country ? (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital[0]}</td>
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
                  {country.borders.map((border, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`/country/${
                            this.props.countries.find(oneCountry => {
                              return oneCountry.cca3 === country.borders[0];
                            }).name.common
                          }`}
                        >
                          {border}
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
    ) : (
      <div>please wait...</div>
    );
  }
}

export default CountryDetails;
