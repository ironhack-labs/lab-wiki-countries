import React from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
    let getCountries = cca3 => countries.find(obj => obj.cca3 === cca3);
    const { params } = props.match;
    const foundCountry = getCountries(params.cca3)
    console.log(foundCountry, 'foundCountry')

    const getCountriesBorder = border => countries.find(obj => obj.cca3 === border);

    const border = foundCountry.borders.map((eachBorder, index) => {
        console.log(eachBorder, 'eachBorder')
        
        return (
            <ul key={index}>
                <li>
                    <Link to={`/${eachBorder}`}>{getCountriesBorder(eachBorder).name.common}</Link>
                </li>
            </ul>
        )
    })
    // console.log(border , 'Border')

    return (
      <>
        <h1>{foundCountry.name.common}</h1> 
        <p>Capital  {foundCountry.capital}</p>
        <p>Area  {foundCountry.area}</p>
        <p>Borders </p> {border}
      </>
    );
  }
  
  export default CountryDetails;