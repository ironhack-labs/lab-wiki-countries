import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  const foundCountry = countries.find((singleCountry) => {
    return singleCountry.alpha3Code === id;
  });
  return (
    <div>
      {foundCountry && (
        <>
          <h1 className="p-5">{foundCountry.name.common}</h1>
          <h1>Capital City: {foundCountry.capital[0]}</h1>
          <h1>Region: {foundCountry.area}</h1>
          {countries.map((item, i) => {
            return foundCountry.borders.find(
              (el) => el === (item.alpha3Code || item.alpha3Code)
            ) ? (
              <h1 key={i}>{item.name.common}</h1>
            ) : null;
          })}
        </>
      )}
    </div>
  );
};

export default CountryDetails;