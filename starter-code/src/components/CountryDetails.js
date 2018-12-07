import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const countryDetails = (props) => {

  function getCountry() { 
    return countries.find((deCountry) => {
    return deCountry.name.common === props.match.params.common
    })
  };
  //const { params } = props.match;
  const foundCountry = getCountry();
  //console.log(foundCountry)
  return (
    <div>
      <h2>{foundCountry.flag} { foundCountry.name.common } <span style={{fontSize:"14px"}}>{ foundCountry.region }</span></h2>
      <h3>Area: { foundCountry.area }</h3>
      <p>status: { foundCountry.status }</p>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default countryDetails;