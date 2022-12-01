import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({ countriesList }) => {
  return (
    <div>
      <h1>Countries</h1>
      {countriesList.map((countrie) => {
        return (
          <div key={countrie.alpha3Code} className="countrie">
            <Link to={`/countries/${countrie.alpha3Code}`}>{countrie.name.official}</Link>
          </div>
        );
      })}
    </div>
  );
};
export default CountriesList;







