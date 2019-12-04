import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

function OneCountry(props) {
  const getCountry = id => countries.find(oneCountry => oneCountry.cca3 === id);
  const country = getCountry(props.match.params.cca3);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <hr></hr>
      <h2>Captial</h2> <p>{country.captial}</p>
      <hr></hr>
      <h2>Area</h2> <p>{country.area} km</p>
      <hr></hr>
      <h2>Borders</h2>
      <ul>
        {country.borders.map((border, idx) => (
          <li>
            <Link to={country.cca3} key={idx}>
              {border}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OneCountry;
