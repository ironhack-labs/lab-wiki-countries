import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const getCountry = id => {
    return countries.find(pais => {
      return pais.cca3 === id;
    });
  };

  const { params } = props.match;
  const paisEncontrado = getCountry(params.id);

  return (
    <div className="text-center col-7">
      <h2>{paisEncontrado.name.common}</h2>
      <p> Capital: {paisEncontrado.capital[0]}</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h3>Borders</h3>
        </li>
        {paisEncontrado.borders.map((item, key) => {
          return (
            <li key={key} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetail;
