import React from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json';

export default function CountriesList() {
  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div class="list-group">
          {countries.map(country => (
              <div>
                  <Link className="list-group-item list-group-item-action" to={`/countries/${country.cca3}`}>
                      <span>{country.name.common}</span>
                  </Link>
              </div>
          ))}
      </div>
    </div>
  );
}

// {countries.map((country) => (
//     <div key={country.cca3} className="list-group">
//         <Link to={`/countries/${country.cca3}`}>
//             <span>{country.name.common}</span>
//         </Link>
//     </div>
//      ))}
