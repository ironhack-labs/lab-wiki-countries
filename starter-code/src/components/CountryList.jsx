import React from "react";
import { Link } from "react-router-dom";

const CountryList = props => {
  //   console.log(props.countries);

  const country = props.countries.map(country => {
    return (
      <Link
        to={country.cca3}
        key={country.cca3}
        className="list-group-item list-group-item-action"
      >
        {country.flag}
        {country.name.common}
      </Link>
    );
  });
  return <div>{country}</div>;
};

export default CountryList;
