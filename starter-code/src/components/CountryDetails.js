import React from 'react';
import countries from '../countries.json';

const CountryDetails = (props) => {
  const myFilteredArray = countries.filter(selectedCountry => (selectedCountry.cca3 === props.match.params.id))[0]
  console.log(myFilteredArray)
  return (
    <div className="countryDetails">
      <h2>{myFilteredArray.name.official}</h2>
      <hr/>
      <h3>Capital: {myFilteredArray.capital}</h3>
      <hr/>
      <h3>Area: {myFilteredArray.area} km2</h3>
      <hr/>
      <h3>Borders: 
        <ul>
          {myFilteredArray.borders.map(eachBorder => ( <li>{eachBorder}</li> ))}
        </ul>
      </h3>
    </div>
  )
}

export default CountryDetails;