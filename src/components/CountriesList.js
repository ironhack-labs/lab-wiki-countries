import React from "react";
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

const CountriesList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
          <img
            className="img-card-top"
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
          />
          <div>{country.name.common}</div>
        </Link>
      ))}
      <CountryDetails countries={countries} />
    </div>
  );
};

export default CountriesList;
