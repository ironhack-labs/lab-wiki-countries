import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const countryDetails = props => {
  console.log(props);

  const { params } = props.match;
  const foundCountry = countries.find(country => country.cca3 === params.cca3);

      
  const borderCountries = foundCountry.borders.map( borderCountryCode => {return countries.find( country => country.cca3 === borderCountryCode)});
        
  return (
    <div class="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderCountries.map((country, index) => {
                  return (
                    <li>
                    <a key={country.cca3}>
                        <Link to={`/countryDetail/${country.cca3}`}>
                          <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}></img> {country.name.common}
                        </Link>
                      </a>
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
};

export default countryDetails;
