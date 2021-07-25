import React from 'react';
import countryArray from '../countries.json';
import './CountryDetails.css';
import { Link } from 'react-router-dom';


const countryDetails = (props)  => {
  console.log(props);

  const countryId = props.match.params.id;
  const findCountry = countryArray.find(el => countryId === el.cca3)

  return (
    <div>
      <h2>{findCountry.name.common}</h2>
      <p>Capital: <span>{findCountry.capital}</span></p>
        <p>Area: <span>{findCountry.area}km</span></p>
        <p>Borders:</p>
        <ul className="detail">
        {findCountry.borders.map((el)=><li key={findCountry.cca2}><Link to={`/${el}`}>{el}</Link></li>)}
        </ul>  
    </div>
  );
};


export default countryDetails;