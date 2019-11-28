import React from "react";
import { Link } from "react-router-dom";
import CountryArray from "./countries.json";

const countryList = CountryArray;

console.log(countryList);

export const CountryDetail = props => {
  console.log("hello", props);
  const countryId = props.match.params.id;

  const country = countryList.find(el => {
    console.log(el.cca3 === countryId);
    return el.cca3 === countryId;
  });

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
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
              <ul>
                {country.borders.map(bordercca3 => {
                  return (
                    <li>
                      <Link to={`/country/${bordercca3}`}>
                        {
                          countryList.find(country => {
                            return country.cca3 === bordercca3;
                          }).name.common
                        }
                      </Link>
                    </li>
                  );
                })}

                {/* <li>
                  <Link to="/BEL">Belgium</Link>
                </li>
                <li>
                  <Link to="/DEU">Germany</Link>
                </li>
                <li>
                  <Link to="/ITA">Italy</Link>
                </li>
                <li>
                  <Link to="/LUX">Luxembourg</Link>
                </li>
                <li>
                  <Link to="/MCO">Monaco</Link>
                </li>
                <li>
                  <Link to="/ESP">Spain</Link>
                </li>
                <li>
                  <Link to="/CHE">Switzerland</Link>
                </li> */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
