import React from "react";
import countries from "../countries.json";
import { NavLink } from "react-router-dom";

const CountryDetail = props => {
  const { code } = props.match.params;
  const getCountry = code => {
    return countries.find(oneCountry => oneCountry.cca3 === code);
  };

  const getName = code => {
    const country = getCountry(code);
    return country.name.official;
  };

  //   const country = countries.find(oneCountry => oneCountry.cca3 === code);
  const country = getCountry(code);
  const { name, area, capital, borders } = country;

  return (
    <div>
      <h2>{name.official}</h2>
      <p>{capital[0]} </p>
      <p> {area} km2</p>
      <ul>
        {borders.map((border, index) => {
          return (
            <li key={index}>
              <NavLink
                className="list-group"
                to={`/${border}`}
              >
                {getName(border)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetail;
