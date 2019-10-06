import React from "react";
import { Link } from "react-router-dom";

function CountryComponent(props) {
  const theCode = props.match.params.code;
  const theActualCountry = props.listOfCountries.find(eachCountry => {
    return eachCountry.cca3 === theCode;
  });

  const showBorders = () => {
    return theActualCountry.borders.map((eachBorder, i) => {
      const borderCountry = props.listOfCountries.find(eachCountry => {
        return eachCountry.cca3 === eachBorder;
      });
      return (
        <div key={i}>
          <Link to={"/" + eachBorder}>{borderCountry.name.common}</Link>
        </div>
      );
    });
  };

  console.log(theActualCountry);
  return (
    <div>
      <h2>{theActualCountry.name.common}</h2>
      <p>
        Capital: <b>{theActualCountry.capital}</b>
      </p>
      <p>
        Area:{" "}
        <b>
          {theActualCountry.area} km<sup>2</sup>
        </b>
      </p>
      {showBorders()}
    </div>
  );
}

export default CountryComponent;
