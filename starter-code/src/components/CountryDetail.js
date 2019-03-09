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
              /* on avait mis key={index} mais c'est une très mauvaise pratique car si on filtre ou on réordonne notre 
              countries.json => nos éléments vont changer d'index et ça va foutre le bordel. Donc il faut mettre
              key={un id unique} => key={border.cca3}*/

            <li key={border.cca3}>
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
