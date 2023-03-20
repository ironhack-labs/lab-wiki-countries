import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const CountriesList = ({ countries}) => {

  
 return (
  
    <div className="col-4 text-center">
      <div className="row justify-content-center">
      
        {countries.map((country) => {
          return (
            <Link key={country._id} className="text-decoration-none" to={country.alpha3Code}> 
            {/* Esto es la ruta a la que vamos a redireccionar*/}


            <div className='col-12 p-3 d-flex align-items-center flex-column border'>
              <img
                className=""
                width={30}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <p>{country.name.common}</p>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
