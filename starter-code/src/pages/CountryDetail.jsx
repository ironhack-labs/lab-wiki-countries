import React from "react";
import countries from "../countries";
import { Link } from "react-router-dom";

function CountryDetail(props) {
  function getCountry(cca3) {
    return countries.find(c => c.cca3 === cca3);
  }
  let cca3 = props.match.params.cca3;
  let country = getCountry(cca3);
  if (!country) return <h1>Oops, no country found...</h1>;

  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <th key={country.capital}>Capital</th>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <th key={country.area}>Area</th>
              <td>{country.area} km²</td>
            </tr>
            <tr>
              <th className="borders" key={country.borders}>
                Borders:
              </th>
              <td className="borders">
                <ul>
                  {!country.borders.length && (
                    <li className="noborder">No border</li>
                  )}
                  {country.borders.map(border => (
                    <li key={border}>
                      <Link to={"/" + border}>
                        {getCountry(border).name.common}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetail;
