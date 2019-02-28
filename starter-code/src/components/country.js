import React from "react";
import countries from "../countries.json"
import { Link } from 'react-router-dom';
import '../App.css';

const country = () => {  
  const gemoji = require('gemoji')
  return(
    <div className="Country">
      <ul className="list-group"> 
        {
          countries.map((pais, index)=>{
            return ( 
              gemoji.unicode[`${pais.flag}`]!==undefined ?                
                <li key={index}>
                  <Link to={`/countryDetail/${pais.cca3}`} className="list-group-item list-group-item-action">{gemoji.unicode[`${pais.flag}`].emoji} {pais.name.common}</Link>
                </li>
              :                
                <li key={index}>
                  <Link to={`/countryDetail/${pais.cca3}`} className="list-group-item list-group-item-action">>{pais.name.common}</Link>
                </li>           
            )            
          })
        }
      </ul>
    </div>
  )
}
export default country