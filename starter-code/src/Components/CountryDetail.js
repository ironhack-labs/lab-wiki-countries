import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    //   console.log(this.props.allCountries)
    return (
      <div>
        {countries.map(
          (country, index) =>
            country.cca3 === this.props.match.params.id && (
              <div key={index} className="col-7">
                <h1>{country.name.common} </h1>
                <table className="table">
                  <thead />
                  <tbody>
                    <tr>
                      <td>Capital</td>
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
                        <div className="list-group">
                          {country.borders.map((elem, index) => (
                            <Link
                              to={`/${elem}`}
                              key={elem}
                              className="list-group-item list-group-item-action"
                            >
                              {countries.map(
                                (element, i) =>
                                  element.cca3 === elem && (
                                    <p key={i}>{element.name.common}</p>
                                  )
                              )}
                            </Link>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
        )}
      </div>
    );
  }
}

export default CountryDetail;