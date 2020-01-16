import React from "react";
import { NavLink } from "react-router-dom";

const CountryDetails = props => {
  var countrycode = props.match.params.country;
  var countryResult = props.countries.filter(item =>
    item.cca3.includes(countrycode)
  );

  var country = countryResult[0];
  var borderCountries = country.borders.map(code =>
    props.countries.filter(item => item.cca3.includes(code))
  );
  console.log(borderCountries.flat());

  return (
    <div>
      <h1>{country.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Capital:</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area:</td>
            <td>{country.area}</td>
          </tr>
          <tr>
            <td>Borders:</td>
            <td>
              {borderCountries.flat().map(item => (
                <li>
                  <NavLink to={`/${item.cca3}`}>{item.name.common}</NavLink>
                </li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
