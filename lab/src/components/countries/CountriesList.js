import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../../countries.json'

const CountriesList = () => {
    return (

        <div className="col-5 mt-4">
            <div className="list-group">                
                        
                {countries.map((elm, index) => (
            
                    <Link className="list-group-item list-group-item-action" key={index} to={`/countries/${elm.cca3}`} >{elm.name.common}</Link> 
               
                ))}                 
                                                  
            </div>           
        </div>  
        
    )
}

export default CountriesList  
