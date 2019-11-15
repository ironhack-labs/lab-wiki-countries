import React from "react";
import countries from "../countries";

const CountryDetail = ({ match }) => {
  console.log();
  const currentCountry = countries.find(
    country => country.cca3 === match.params.countryCode
  );
  return (
    <div>
      <h1>{currentCountry.name.common}</h1>
      <p>Capital :{currentCountry.capital}</p>
      <hr />
      <p>Area : {currentCountry.area}</p>
      <hr />
      {currentCountry.borders.map(eachBorder => (
        <p>{eachBorder}</p>
      ))}
    </div>
  );
};

export default CountryDetail;
