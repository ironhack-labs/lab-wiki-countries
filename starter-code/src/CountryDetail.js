import React from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";

let getCountryByccas3 = cca3 => {
  return countries.find(country => country.cca3 === cca3);
};

const CountryDetail = props => {
  const country = getCountryByccas3(props.match.params.cca3);

  return (
    <div>
      <h3>{country.name.official}</h3>
      <hr />
      <h4>Capital:{country.capital}</h4>
      <hr />
      <h5>Area: {country.area}km square</h5>
      <hr />
      <h5>
        {" "}
        Borders:{" "}
        <div>
          <ol>
            {country.borders
              .map(cca3 => getCountryByccas3(cca3))
              .map(c => (
                <li>
                  <Link to={`/${c.cca3}`}> {c.name.official}</Link>
                </li>
              ))}
          </ol>
        </div>
      </h5>
    </div>
  );
};

export default CountryDetail;
