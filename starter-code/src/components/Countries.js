import React from 'react';
import data from '../countries.json';
import { Link } from 'react-router-dom';

function Countries() {
  return (
    <div className="App">
    <div className="list-group">
      {data.map((country) => {
        return(
        
          <div> 
            <Link to={`/${country.cca3}`} key={country.name.common} className="list-group-item list-group-item-action"><span>{country.flag}</span> {country.name.common}</Link>
            
          </div>
            ) 
      })}
    </div>
  </div>
  );
}

export default Countries;
