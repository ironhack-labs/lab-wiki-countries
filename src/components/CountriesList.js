import React from 'react';
import { Link } from 'react-router-dom';


const CountriesList (){
  return ( 

  <div className="countries"}
        <div>
          {countries.map((country) => {
            return (
            <div key={country.alpha3Code}>
                <Link
                 
                  to={`/${country.alpha3Code}`}
                >
                  <img
                    src={country.flagalpha2Code.}
                    alt="country"
                  />
                  
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      );
    };
    
  export default CountriesList; 
