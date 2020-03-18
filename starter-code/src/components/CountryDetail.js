import React from 'react';
import { Link } from 'react-router-dom';
import data from '../countries.json'


function CountryDetail(props) {
    console.log(props)
  return (
      
    <div>
    {data.map((country) => {
      if(country.cca3 === props.match.params.id) {
        return(
          <div>
            <h1>{country.name.common}</h1>
            <h2>Capital: </h2> 
            <p>{country.capital}</p>
            <h2>Area: </h2> 
            <p>{country.area} km2</p>
            <h2>Borders: </h2>
            <ul>
              {country.borders.map((border) => {
                return <li><Link to={`/${border}`}>
              {data.map((country) => {
                if (country.cca3 === border) {
                    return <p>{country.name.common}</p>
                }
                })}
                  </Link></li>
              })}
            </ul>
          </div>
        )
      }
    })}
  </div>
  );
}

export default CountryDetail;
