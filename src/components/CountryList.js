import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryList = (props) => {
  return (
      
    <div className="col-5"> 
      <div className='list-group'>
        {countries.map((EachCountry, index) => {
       
          return (
            <Link
            key={EachCountry.cca3}
            to={`/${EachCountry.cca3}`}
            className="list-group-item list-group-item-action"
            >
            {EachCountry.name.official}
            </Link> 
          );
        })}
      </div>
    </div>

  );
}

export default CountryList;