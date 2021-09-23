import React from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom';

export default function CountriesList() {
    return (
        <div className="countries-list">
        {
            countries.map((country) =>{
                return(
                    <div>
                    <Link to={`/countries-list/${country.cca3}`}> {country.name.common}</Link>
 
                    </div>
                )
            })
        }
        
        </div>
        
    )
}
