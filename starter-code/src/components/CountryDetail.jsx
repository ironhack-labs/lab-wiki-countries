import React, { Component } from "react";
import countries from "../countries.json";

const Details = (props) => {
    console.log(props)
  return (
    <div>
      {countries.map((country, idx) => {
        if (country.cca3 == props.match.params.id) {
          return (
            <div key={idx}>
                <h1>{country.name.common}</h1>
              <p>Capital {country.capital[0]}</p>
              <p>Area {country.area} km2</p>
              <p>Borders {`${country.borders}`} </p>
            </div>
          );
        }
      })}
    
    </div>
  );
};

export default Details;

