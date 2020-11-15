import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((ele, index) => {
        return (
          <div key={index} className="list-group">
            <Link className="list-group-item list-group-item-action" to={`/${ele.cca3}`}>
             <img src={`https://www.countryflags.io/${ele.cca2}/flat/64.png`} alt="flag" />{ele.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
