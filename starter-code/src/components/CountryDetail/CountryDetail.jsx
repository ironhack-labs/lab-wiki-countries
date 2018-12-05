import React, { Component } from 'react';
import countries from "../../countries.json";
import { Link } from 'react-router-dom';


function findCountry(cca3){
  let objectCountry = countries.filter((country)=>{
        return cca3 === country.cca3;
    })
    return objectCountry[0];
}



const CountryDetail = (props) => {
    let country = findCountry(props.match.params.id);
    return (

        <div>
            <div className="country-details">
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}km²</p>

                <ul>
                    Borders:
                {country.borders.map(border=>
                   
                   <li>
                    <Link to={`/CountryDetail/${border}`}>
                         {findCountry(border).name.common}
                    </Link>
                   </li>    
                )}
                </ul>
               
            </div>
        </div>
      )
}       

export default CountryDetail;