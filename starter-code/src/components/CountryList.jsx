import React, { useContext } from "react";
import { CountryContext } from "../context/countries.context";
import { Link } from "react-router-dom";

export const CountryList = () => {
  const { countries } = useContext(CountryContext);
  console.log(countries);

  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((country, i) => (
          <Link key={i} to={country.cca3} className="list-group-item list-group-item-action">
            {country.flag}
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};
