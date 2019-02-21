import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./CountryDetail.css";
import allCountries from "./countries.json";

function findName(oneBorder) {
  var countryNames = allCountries.filter(oneCountry => {
    return oneCountry.cca3 === oneBorder;
  });
  // console.log(countryNames);
  return countryNames.map(oneCountry => {
    return oneCountry.name.common;
  });
}

class CountryDetail extends Component {
  render() {
    const { params } = this.props.match;
    const countryItem = allCountries.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });

    return (
      <div className="CountryDetail">
        {countryItem ? (
          <div>
            <h1>{countryItem.name.common}</h1>

            <table className="table">
              <thead />

              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>Capital</td>
                  <td>{countryItem.capital[0]}</td>
                </tr>

                <tr>
                  <td>Area</td>
                  <td>
                    {countryItem.area} km
                    <sup>2</sup>
                  </td>
                </tr>

                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {countryItem.borders.length > 0 ? (
                        countryItem.borders.map(oneBorder => {
                          return (
                            <li>
                              <NavLink to={`/country/${oneBorder}`}>
                                {findName(oneBorder)}
                              </NavLink>
                            </li>
                          );
                        })
                      ) : (
                        <div>No Borders</div>
                      )}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>Country NOT FOUND</div>
        )}
      </div>
    );
  }
}

export default CountryDetail;
