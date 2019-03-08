import React from 'react';
import countries from '../countries.json'
import {Link} from "react-router-dom";



const countryList = () => {
  return (
    <div>
      {countries.map((eachCountry, index) => {
        return (
        
    
            <div key={eachCountry.cca3}>
                <ul className="list-group display-flex justify-content-start">
                    <Link to={`/countryList/${eachCountry.cca3}`} ><li className="list-group-item">{eachCountry.flag} {eachCountry.name.common}</li></Link>  
                </ul>
            </div>
        

          )
      })}

    </div>
  )
}

export default countryList;




                
                
              

