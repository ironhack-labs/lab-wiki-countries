import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from '../countrydetail/CountryDetails'
import '../../index.css'

function CountryCard({ country }) {
  
  return (
    
    <div className="cartita">
    <div class="card text-white bg-dark mb-3">
  <div class="card-header">{country.name.official}</div>
  <div class="card-body">
    <h5 class="card-title">{country.capital}</h5>
    <p class="card-text"><Link to={`/${country.cca3}`}>
        <p>{country.name.common}</p>
      </Link></p>
  </div>
</div>
     
    </div>
  
  );
}

export default CountryCard;