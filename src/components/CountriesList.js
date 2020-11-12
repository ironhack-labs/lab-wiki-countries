import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export const ListCountries = (props) => {
   
    return (
      <>
      {countries.map((eachCountry, index) => {
        return (
          <div key={index}>
            <h3><Link to={`/${eachCountry.cca3}`}>{eachCountry.flag}{eachCountry.name.common}</Link></h3>
          </div>
        );
      })}
      </>
    );
  }
  
  