import React, { Component } from "react";
import "./CountryDetail.css";
import allCountries from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  render() {
    console.log(this.props.match);
    const { params } = this.props.match;

    const countryItem = allCountries.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });

    return (
      <section className="CountryDetail">
        {countryItem ? (
          <div>
            <h1>{countryItem.name.common}</h1>
            <p>Capital: {countryItem.capital}</p>
            <p>Area: {countryItem.area}</p>

            <p>
              Borders:
              <ul>
                {countryItem.borders.map((oneBorder, index) => {
                  const borderCountryItem = allCountries.find(oneCountry => {
                    return oneCountry.cca3 === oneBorder;
                  });

                  console.log("BORDER COUNTRY", borderCountryItem);

                  return (
                    <li key={index}>
                      <Link to={`/country-detail/${borderCountryItem.cca3}`}>
                        {borderCountryItem.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </p>
          </div>
        ) : (
          <h2>Country Not Found</h2>
        )}
      </section>
    );
  }
}

export default CountryDetail;
