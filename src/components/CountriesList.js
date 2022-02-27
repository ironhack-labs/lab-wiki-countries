import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import React from 'react';
import "./CountriesList.css"


export default function CountriesList(props) {
  const { countries } = props;

//   {!countries ? (
//     <h1>Loading...</h1>
//   ) : ( )}

  return (
    <section className="displayFlags ">
      
        
         { countries.map((element, index) => {
            return (
              <div class= "countrylist" key={element._id}>
                <Link to={element.alpha3Code}>

                <img src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`} alt="flag of country"></img>
                <br/>
                {element.name.common}</Link>
              </div>
            );
          })}
        
      
    </section>
  );
}

// {props.countries.map((elm) => {
//     return(
//         <li>
//             <img
//             src=""
//             alt={elm.name.comon}
//             />
//             <link> to={`/countries/${elm.alpha3Code}`}
//             {elm.}
//             </link>
//         </li>
//     )
// })}
