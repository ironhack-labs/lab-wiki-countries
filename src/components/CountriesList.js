import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div className="list-group">
      {countries.map((country) => (
        <Link
          key={country.alpha3Code}
          to={{
            pathname: `/${country.alpha3Code}`,
            state: { country: country },
          }}
          className="list-group-item list-group-item-action"
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
            className="mr-2"
          />
          {country.name.common}
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;
