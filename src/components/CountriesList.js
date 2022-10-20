import { useState } from 'react';

import {Routes, Route, Link} from "react-router-dom";
import CountryDetails from './CountryDetails';

function CountriesList({countries}) {
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-5" >
          <div className="list-group">

            {countries.map((country) => {
                return(
                    <Link className="list-group-item list-group-item-action" to={`/countries/${country.alpha3Code}`}>
                    <img src={ `//flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=""/>{country.name.official}
                    
                    
                    </Link>
                    
                )
            })}
            
          </div>
        </div>
      </div>
    </div>
  )
};

export default CountriesList;
