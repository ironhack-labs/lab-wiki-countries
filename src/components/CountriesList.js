import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function CountriesList({ countries }) {


  
  const renderCountries = () => {
    return countries.map((country, i) => (
      <div key={i} className='row'>
        <div className="col-5" style={{maxHeight: "90vh", overFlow: 'scroll'}}>
          <div className="list-group">
            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`} >{country.name.common}</Link>
          </div>
        </div>
      </div>
    ));
  }


  return (
    <div className="container">

        {renderCountries()}
    </div>

  )
}
