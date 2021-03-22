import React from 'react';
import countriesJSON from './../countries.json';
import {Link} from 'react-router-dom'

const CountryDetails = (props) => { 

const idCountry = props.match.params.id;

const CountryInfos = countriesJSON.find( country =>  country.cca3 === idCountry )
console.log(CountryInfos)

return (
    <div> 

        <div> <h3> {CountryInfos.name.common}</h3></div>

        <div> {CountryInfos.capital}  </div>

        <div> {CountryInfos.area}   </div>
        <div> 
            <ul className="list-group">  
                
                 {CountryInfos.borders.map((borderCountry, index)  => {     
                const countryByBorder = countriesJSON.find( country =>  country.cca3 === borderCountry )
        return (    
            
                 
                <li  className="list-group-item" key={index}>
                       
                {countryByBorder.name.common}
                
                </li> 
        )
    })}
            </ul> 
        </div>
        </div>

    )}

export default CountryDetails; 