import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const CountryDetails = (props) => {

  const myFilteredArray = countries.filter(selectedCountry => (selectedCountry.cca3 === props.match.params.id))[0]

  const findName = (countryCode) =>{
    const filteredCodes = countries.filter(eachCountry => eachCountry.cca3 === countryCode)[0]
      return filteredCodes.name.official;
  }

  return (
    <div className="countryDetails">
      <h2>{myFilteredArray.name.official} {myFilteredArray.flag}</h2>
      <hr/>
      <h3>Capital: {myFilteredArray.capital}</h3>
      <hr/>
      <h3>Area: {myFilteredArray.area} km2</h3>
      <hr/>
      <h3>Borders: 
        <ul>
          {   
              myFilteredArray.borders.length === 0 ? 
              <li>No borders</li>
              :
              myFilteredArray.borders.map(eachBorder => {
              return <li>
              <Link to={`/${eachBorder}`}>{findName(eachBorder)}</Link>
              </li>
            })
          }
        </ul>
      </h3>
    </div>
  )
}

export default CountryDetails;