import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export const CountryDetail = data => {
  const countriesList = countries;

  const getcca3 = cca3 => countriesList.find(obj => obj.cca3 === cca3);

  const { params } = data.match;

  const country = getcca3(params.cca3);
  console.log(country);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <h1>Capital: {country.capital}</h1>
      <h1>
        Area: {country.area} KM<sup>2</sup>
      </h1>
      <h1>Borders:</h1>
      
        {country.borders.map((countryId, i) => (
          <Link key={i} to={`/${countryId}`}>
            <p>
              {countriesList.map((country, i) => { 
                  if (country.cca3 === countryId) { 
                      return <span key={i}>country.name.common</span>
                      } return null
                      })
                      }
            </p>
          </Link>
             ))}
    </div>
  );
};
