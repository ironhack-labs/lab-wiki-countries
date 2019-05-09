import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  console.log(props)
  const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    return countries.find(theCountry)
  };
  
  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);
   
  return (
    <div style={{marginTop: '50px'}}>
      <h2>{ foundCountry.name.common } 
      <h5 style={{marginTop: '30px'}}>Capital:{ foundCountry.capital }</h5></h2>
      <h5 style={{marginTop: '30px'}}>Area: { foundCountry.area }</h5>
      {foundCountry.borders.map((country, index) => 
        <ul style={{marginTop: '20px'}}><Link to={`/${country}`}>{ country}</Link></ul>
        ) }
    </div>
  )
}

export default CountryDetails;

/* <ul>
        <Link to='/:id'>{ foundCountry.borders? foundCountry.borders : null }</Link>
      </ul>
      <Link to='/projects'>Back</Link> */