import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  
  return (
    <div className='col-6 text-center'>
      <h1 className='my-5'>Countries List</h1>
      <div className="row justify-content-center">
        {
          countries.map((country) => {
            return (
              <Link key={country._id} className='text-decoration-none text-secondary' to={country.alpha3Code}>
                <div className='col-12 p-3 d-flex align-items-center text border' >
                  <img className='' width={30} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                  <h3 className='my-0 ms-3'>{country.name.common}</h3>
                </div>
              </Link>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default CountriesList;
