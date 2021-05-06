import React, { Component } from 'react';
import countries from "../countries.json";
import { Link } from 'react-router-dom';


export default function CountriesList (props) {

    const mappedCountries = countries.map(country => {
        return (

            <div className="row country" key={country.cca3}>
                 <div classNamme="col-lg-6">
                 <h3>
                   <Link to={`/country/${country.cca3}`} >{country.name.official}</Link>
               </h3> 
                 </div>
            </div>

        )
    });
    return (  

        <div className="container-fluid col-lg-6">
            {mappedCountries}
        </div>
        
           
       
            
    )

}
