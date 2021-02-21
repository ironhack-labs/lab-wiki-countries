
import React from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';

export function CountriesList() {

  
  const countryList = countries.map(function (i) {
    return <Link className="list-group-item list-group-item-action" key={i.cca3} to={`/${i.cca3}`}><p>{i.name.common}</p></Link>
  });
   
 return <div className="list-group">{countryList}</div>
}


