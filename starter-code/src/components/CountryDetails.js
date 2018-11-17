import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const countryDetails = (props) => {
  console.log(props)
  //console.log()

  const getCountry = (commonName) => {
    const theCountry = oneCountry => {  
      return oneCountry.name.common === commonName;
    }
    return countries.find(theCountry)
  };
  
  const { params } = props.match;
  const foundCountry = getCountry(params.common, 10);
  console.log(foundCountry)
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