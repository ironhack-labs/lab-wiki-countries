// components/ProjectDetails.js

import React from 'react';
import allTheCountries from '../countries.json';
import { Link } from 'react-router-dom';
import Main from './Main';



const CountryDetails = (props) => {

    const getCountry = (name) => {
        return allTheCountries.find((oneCountry)=>{
          return  oneCountry.name.common === name
        })
      };

      const getCountryByCode = (code) => {
        return allTheCountries.find((oneCountry)=>{
          return  oneCountry.cca3 === code
        })
      };

    const theActualCountry = getCountry(props.match.params.name);

    
    return (

     
        <div className="row justify-content-between  mt-4">
        <Main />
        <div className="col-7">
           <h1>{theActualCountry.name.common}</h1>
           <hr/>
           <p>Capital: {theActualCountry.capital[0]} </p>
           <hr/>
           <p>Area: {theActualCountry.area} </p>
           <hr/>
            <div className="row">
                <div className="col-6">
                   {theActualCountry.borders.length >0 && <p>Borders: </p> } 
                </div>  
                <ul className="col-6">
                {theActualCountry.borders.map((oneCode, index) => {
                   const oneCountry = getCountryByCode(oneCode)
                    return (
                        <li  className="myList" key={index}>
                            <Link to={`/countries/${oneCountry.name.common}`}>
                                {oneCountry.name.common}
                            </Link> 
                        </li>
                    )
                    })}
                </ul>
            </div>
               

            </div> 
           
        </div>
     
    )


}    

export default CountryDetails;