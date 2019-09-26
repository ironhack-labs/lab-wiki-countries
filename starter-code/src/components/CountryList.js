import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryList = () => {
  //   console.log(countries[0].name);
  const allCountries = countries.map((country, index) => {
    return (
      <p key={index} className='list-group-item list-group-item-action'>
        <Link to={`/${country.cca3}`}>
          {country.flag} {country.name.official}
        </Link>
      </p>
    );
  });

  return <div className='list-group'>{allCountries}</div>;
};

export { CountryList, countries };
