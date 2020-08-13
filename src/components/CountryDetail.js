import React from 'react'
import countries from "../countries.json"
import { Link } from 'react-router-dom';

const CountryDetail = props => {
    
//tengo que poder acceder a cada pais para ver cada propiedad
 const matchCountry= countries.find(e => e.cca3 ===props.match.params.cca3);
 //borders
 
 
//  console.log(matchCountry);


 return(
     <div>
         {/* me deberia devolver cada detalle de pais  */}
         <h1>{matchCountry.name.common}</h1>
         <p>Capital:{matchCountry.capital}</p>
         <p>Area: {matchCountry.area}</p>
         <p>{matchCountry.flag}</p> 
        {matchCountry.borders.map(oneBorder=>{
                   const countryBorder = countries.find(e => e.cca3 === oneBorder)
                   return (
                       <p>{countryBorder.name.common}</p>
                   ) 

                   
        })}
       

     </div>
 );

};

export default CountryDetail