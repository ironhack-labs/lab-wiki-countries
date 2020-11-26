import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom'


export default function CountriesList(){    
    return(
        <ul style={{color:"black", textDecoration:"none", }}>
            {countries.map(country => (
              <li style={{border:"1px lightgrey solid", padding:"7px", margin:"0px", listStyleType:"none", width:"200px"}}>
                <Link style={{color: "black", textDecoration:"none"}} to={`/country/${country.cca3}`}>
                  {country.name.common}
                </Link>
              </li>
            ))}
          </ul>
    )
}