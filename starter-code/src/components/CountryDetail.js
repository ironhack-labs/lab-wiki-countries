import React, { Component } from "react";
import "./CountryDetail.css";
import allCountries from "../countries.json";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: allCountries
    };
  }

  render() {
    const { params } = this.props.match;
    const countryItem = allCountries.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });

    return (
      <div className="CountryDetail">
        <h1>{countryItem.name.common}</h1>
        <table class="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{countryItem.capital}</td>
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
                  {/* <a href="/AND">Andorra</a> */}
                  {countryItem.borders.map(oneBorder => {
                    const countryItem = allCountries.find(oneCountry => {
                      return oneCountry.cca3 === oneBorder;
                    });
                    return (
                      <li key={oneBorder}>
                        <a href={oneBorder}>{countryItem.name.common}</a>
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

export default CountryDetail;
