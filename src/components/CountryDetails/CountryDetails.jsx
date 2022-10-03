import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCountries } from '../../services/services';

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  
  console.log(id)

  useEffect(() => {
    fetchCountries(id)
      .then(country => {
        console.log(country)
        return setCountry(country)
      })
  }, [id]);

  return (
    <div className='col-6 text-center'>
      <h1 className='my-5'>Countries Details</h1>
      {country ? (
      <div className="row justify-content-center">
        <div className="col-12 ">
          <img className='' width={50} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
          <h1>{country.name.common}</h1>
          <h2>Capital: {country.capital[0]}</h2>
          <p>Area: {country.area + ' km2'}</p>
          <h3>Borders</h3>
          {
            country.borders.map((border) => {
              return (
              <p key={border}>
                <Link to={`/${border}`}>
                  {border}
                </Link>
              </p>
              )
            }
          )}
        </div>
      </div>
      ) : 'Loading country...'} 
    </div>
  );
}

export default CountryDetails;
