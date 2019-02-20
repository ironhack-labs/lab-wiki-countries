import React, { Component } from "react";
import countries from "../countries.json";

const Details = (props) => {
    
  return (
    <div>
      {countries.map((country, idx) => {
        if (country.cca3 == props.match.params.id) {
          return (
            <div key={idx}>
                <h1>{country.name.common}</h1>
              <p>Capital {country.capital[0]}</p>
              <p>Area {country.area} km2</p>
              <p>Borders <ul>
              {country.borders.map(border => {
                return <li><a href={border}>{border}</a></li>
              })}
              </ul>
              </p>
              
            </div>
          );
        }
      })}
    
    </div>
  );
};

export default Details;

