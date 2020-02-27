import React from 'react'
import countries from "../countries.json";
import {Link} from 'react-router-dom';


const CountryDetail =(props) => {
  console.log(props);
  

const getCountryByCca3 = (cca3) => {
  const result = countries.find ( (country) => country.cca3 === cca3 );

  return result;
}

const getCountryName = (cca3) => { 
  const result = countries.find ( (country) =>  country.cca3 === cca3);
    return result.name.official;
  } 

const { countryCca3 } = props.match.params;
const countryToDisplay = getCountryByCca3(countryCca3);

// const countryInfo= getCountryByCca3(country)

  return (
    <div>
    <h3>name: {countryToDisplay.name.official}</h3>
    <h3>area:{countryToDisplay.area}</h3>
    <h3>borders:</h3>
    {
      countryToDisplay.borders.map( (country) => {
        return (
        <Link to={`/${country}`}>
          <p>{getCountryName(country)}</p>
        </Link>
        );
      })
    }
      
    </div>
  )
}

export default CountryDetail;
