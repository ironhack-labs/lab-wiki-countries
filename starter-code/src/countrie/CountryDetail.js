import React from 'react';
import { Link } from 'react-router-dom';
import data from '../countries.json'

const CountryDetail = props => {

  return (
    <div>
    {data.map((country) => {
      if(country.cca3 === props.match.params.id) {
        return(
          <div>
            <h1>{country.name.common}</h1>
            <hr></hr>
            <h3>Capital: </h3> 
            <p>{country.capital}</p>
            <hr></hr>
            <h2>Area: </h2> 
            <p>{country.area} km2</p>
            <hr></hr>
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
