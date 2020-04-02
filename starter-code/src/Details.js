import React, { Component } from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import CountryDetail from "./CountryDetail";

const Details = props => {
  //console.log(props);

  const getCountry = id => countries.find(obj => obj.cca3 === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);

  const countryCopy = [...countries];



  return (
    <div className="row pr-5">
      <div className="col m-2">
        <div className="detailscountry">
      <h2>
        {foundCountry.flag}
        {foundCountry.name.common}
      </h2><br></br>
  
      
      <p><b>Capital: </b>{foundCountry.capital}</p>
      <p><b>Area: </b>{foundCountry.area} km2</p>
      <div><b>Borders: </b>
        {foundCountry.borders.map(eachBorderCountry => {
          return (
            <a className="col"><Link key= {eachBorderCountry} to= {getCountry(eachBorderCountry).cca3}>
            {getCountry(eachBorderCountry).name.common}
            </Link></a>
          );
        })}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Details;
