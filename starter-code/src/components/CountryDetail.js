import React from "react";
import countries from "../countries.json";

function CountryDetail(props) {
  const cca3 = props.match.params.cca3;

  const findCountry = countries.find(country => country.cca3 === cca3);

  return (
    <div>
      <h1>{findCountry.name.official}</h1>
      <h2>Capital: {findCountry.capital[0]}</h2>
      <h3>
        area: {findCountry.area} Km <sup>2</sup>
      </h3>
      <h4>Borders</h4>
      <ul>
        {findCountry.borders.map(border => (
          <li key={border}>
            {countries.find(country => country.cca3 === border).name.official}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetail;
