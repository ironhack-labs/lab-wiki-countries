import React from 'react'
import countries from '../countries'
import { Link } from 'react-router-dom';

const Country = () =>{
 
    return(
      
      <div>
    {countries.map((country, index) => 
   < Link to={'/countries/${cca3}'}> key={index} >{country.flag}{country.name.common})}</Link>

      </div>
          )
    
}


export default Country