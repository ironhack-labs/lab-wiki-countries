import React from 'react';
import countries from '../countries';
import {Link} from 'react-router-dom';


function CountriesList(props) {


    
  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
      {countries.map((country) => {
        return (
					<div className="list-group">
          	<li className="list-group-item list-group-item-action">
          	  <Link to={`/country/${country.cca3}`}>
          	    {country.name.common}
          	  </Link>
          	</li>
					</div>
        )
      })}
    </div>
  );
}

export default CountriesList;