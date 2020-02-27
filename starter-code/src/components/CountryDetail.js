import React from "react";
import countries from "./../countries.json";
import {Link} from 'react-router-dom';


export default function CountryDetail(props) {
  const focusCountry = countries.find(
    country => country.cca3 === props.match.params.cca3
  );

  return (
    <div>
      <h1>These are the country details:</h1>
      <ul>
        <li>Capital: {focusCountry.capital[0]}</li>
        <li>Area: {focusCountry.area}</li>
        <li>
          Borders:
          <ul>
            {focusCountry.borders.map(border => {
              return (
                <li key={border}>
                  <Link to={border}> {border}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
