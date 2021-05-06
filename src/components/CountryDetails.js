import React, { Component } from 'react';
import countries from "../countries.json";
import { Link, Route, Switch } from 'react-router-dom';

export default function CountriesDetails (props) {

    const countryId = props.match.params.id;
    const country = countries.find( c => countryId===c.cca3)

    const borders = country.borders.map( b => { 
        return (
            <li>
                {countries.map(c =>  { 
                    if (b === c.cca3) return c.name.official } ) }
            </li>
        )
     })

    console.log(borders);

    return ( 

         <div className="container-fluid  col-lg-6">
             <div className="row">
                 <div className="country-details">
                     <h1>{country.name.official}</h1>
                     <table>
                         <tr>
                            <td>Capital</td>
                            <td>{country.capital}</td>
                         </tr>
                         <tr>
                            <td>Area</td>
                            <td>{country.area}</td>
                         </tr>
                         <tr>
                            <td>Borders</td>
                            <td>
                                <ol>
                                    {country.borders.length!==0 ? borders : "island"}
                                </ol>
                            </td>
                         </tr>
                     </table>
                 </div>
             </div>
        </div>
            
    )

}