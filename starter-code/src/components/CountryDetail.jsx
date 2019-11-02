import React, { Component } from "react";
import { Link } from "react-router-dom";
import file from "../countries.json";
import SingleCountryInList from "./SingleCountryInList";

const CountryDetail = props => {
  //   console.log(props.match.params.id);
  const country = file.find(function(element) {
    return element.cca3 === props.match.params.id;
  });
  return (
    <div>
      <h1> {country.name.common}</h1>
      Capital: {country.capital} <br />
      {/* {JSON.stringify(country)} */}
      Area: {country.area}
    </div>
  );
};

export default CountryDetail;
