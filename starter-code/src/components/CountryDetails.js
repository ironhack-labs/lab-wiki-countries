import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

function CountryDetails(props) {
  const cca3 = props.match.params.cca3;
  const foundCountry = countries.find(country => country.cca3 === cca3);

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map(borderCountry => (
                  <li key={borderCountry}>
                    <Link to={`/${borderCountry}`}>
                      {
                        countries.find(
                          country => country.cca3 === borderCountry
                        ).name.common
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
