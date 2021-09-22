import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../../countries.json'

export default function CountryDetails(props) {
console.log(props.match.params.cca3)
    

    const { cca3 } = props.match.params;
    console.log(cca3)
     const clickedCountry = countries.find(country => country.cca3 === cca3);
  

  return (
      <div className="col-6">
       

        { clickedCountry && 
        <div>
          <h1>{clickedCountry.name.common}</h1> and that's enough for today!
        </div>
      }
    
      </div>
  );
}
