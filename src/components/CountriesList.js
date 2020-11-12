import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';


const CountriesList = () => {
return(

          <div className="col-5" style={{maxHeight:'90vh', overflow:'scroll'}}>
            <div className="list-group">
            {countries.map((country, index) => {
                return (
                <Link key={index} className="list-group-item list-group-item-action" to={`/${country.cca3}`}><span role="img" aria-label="emoji">{country.flag}</span> {country.name.common}</Link>
            )})} 
            </div>
          </div>

)

}

export default CountriesList