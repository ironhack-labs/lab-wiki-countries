import React from 'react';
import countries from '../countries.json';
import {  Link } from 'react-router-dom';


const CountryDetail =(props) => {

    let countryDetail = countries.find ( c => c.cca3 === props.match.params.country)

    

// let borderCountries = countries.find (c => c.countryDetail.borders)

    return (
        <div>
        <h2>{countryDetail.name.common}</h2>
        <p> Capital: {countryDetail.capital}</p>
        <p> Area: {countryDetail.area} km</p>
        <div> 
        Borders: 
        <ul>
         {countryDetail.borders.map((eachBorder) => {return   <li> <Link to={`/${eachBorder}`}>{eachBorder} </Link></li>})}
        </ul>

        </div>



        </div>
        
    )
}
export default CountryDetail;
