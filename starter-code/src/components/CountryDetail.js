import React, { Component } from "react";
import "./CountryDetail.css";
import allCountries from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    const { params } = this.props.match;

    const countryItem = allCountries.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });

    return (
      <section className="CountryDetail">
        {countryItem ? (
          <div>
            <h1>{countryItem.name.common}</h1>
            <hr />
            <div class="row">
              <div class="col">Capital</div>
              <div class="col">
                <p>{countryItem.capital}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col">Area</div>
              <div class="col">
                <p>{countryItem.area} km²</p>
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col">Borders</div>
              <div class="col">
                <ul>
                  {countryItem.borders.map((oneBorder, index) => {
                    const borderCountryItem = allCountries.find(oneCountry => {
                      return oneCountry.cca3 === oneBorder;
                    });

                    return (
                      <li key={index}>
                        <Link to={`/country-detail/${borderCountryItem.cca3}`}>
                          {borderCountryItem.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <h2>Country Not Found</h2>
        )}
      </section>
    );
  }
}

export default CountryDetail;
