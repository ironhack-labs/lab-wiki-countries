import React from 'react';
import {Link} from "react-router-dom"
import countries from "../countries"

const  ShowCountries = ()=>{
return( <div>

    {countries.map((country,index)=>{
        
   return (
       <div key={index} className="list-group">
   
   <Link className="list-group-item" key={index} to={`/country-details/${country.cca3}`}><span className="flag-img">{country.flag}</span>{country.name.common}</Link><br/>
    </div>
    
   )
    })}
</div>



)

}






export default  ShowCountries