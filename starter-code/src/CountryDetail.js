import React, { Component } from "react";
import "./CountryDetail.css";
import countries from "./countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { params } = this.props.match;
    console.log("PARAMS IN CD: ", params);

    const countryItem = countries.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });
    console.log("COUNTRY ITEM IN CD: ", countryItem);

    const borderCountries = countryItem.borders.map(oneBorder => {
      return countries.find(oneCountry => {
        return oneBorder === oneCountry.cca3;
      });
    });

    console.log("BORDER COUNTRY ARRAY: ", borderCountries);

    return (
      <section className="CountryDetail">
        <h2>{countryItem.name.common}</h2>
        <table>
          <thead />
          <tbody>
            <tr>
              <td>capital</td>
              <td>{countryItem.capital}</td>
            </tr>
            <tr>
              <td>area</td>
              <td>
                {countryItem.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>borders</td>
              <td>
                <ul>
                  {borderCountries.map(oneCountry => {
                    return (
                      <li key={oneCountry.cca3}>
                        <Link to={`/${oneCountry.cca3}`}>
                          {oneCountry.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default CountryDetail;
