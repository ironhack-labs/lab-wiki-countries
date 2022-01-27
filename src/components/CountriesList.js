import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <>
      {countries.map((country) => (
          <div key={country.alpha3Code} className="card ">
            <div className="card-body d-flex justify-content-start align-items-center">
             <div className="country-2code">
              {country.alpha2Code} 
             </div>
             {'   '} 
             <div className="country-name">
              <Link to={`/${country.alpha3Code} `} >
                {country.name.official}
              </Link> 
             </div>
            </div>
          </div>
      ))}
    </>
  );
};

export default CountriesList;
