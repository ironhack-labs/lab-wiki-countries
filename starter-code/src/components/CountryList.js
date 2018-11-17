import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const countryList = () => {
    //console.log(countries)
    


    return (
      <div className="">  
                <ul>
            {   countries.map((oneCountry, index) => {
                        return <li key={oneCountry.name.common} ><Link to={`/country/${oneCountry.name.common}`} >{oneCountry.name.common}</Link></li>
                })
            }   
                </ul>
      </div>     
    )
  }
  
  export default countryList;