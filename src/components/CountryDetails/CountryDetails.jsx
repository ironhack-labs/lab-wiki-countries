import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryDetails.css';
import { getCountryById } from '../services/CountryService';

const CountryDetails = () => {
  const { countryId } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountryById(countryId)
      .then((countryAPI) => {
        setCountry(countryAPI);
      })

      .catch((err) => console.error(err));
  }, [countryId]);


  return (
    <div className="col-7">

      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        style={{ marginTop: '50px' }}
        alt={country.alpha2Code}
      />
      <h1>{country.name.common}</h1>
      <div className="TableClass">
        <p>
          <b>Capital</b>
        </p>
        <p>{country.capital}</p>
      </div>
      <hr style={{ margin: '0px' }} />
      <div className="TableClass">
        <p>
          <b>Area</b>
        </p>
        <p>
          {country.area} Km <sup>2</sup>
        </p>
      </div>
      <hr style={{ margin: '0px' }} />
      <div className="TableClass">
        <h4>Borders</h4>
        <ul>
          {country.borders.map((border) =>{
            return(
                <Link to={`/${border}`}><li>{border}</li></Link>
            )
          })}
        </ul>
      </div>
      
    </div>
  );
};

export default CountryDetails;
