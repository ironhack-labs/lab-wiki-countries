import React from 'react'
import { Link } from 'react-router-dom';



function CountriesList (props){
    return (
        <div className="col-5" >
        <div className="list-group">
         {props.countries.map((country) => {
           return <Link className="list-group-item list-group-item-action" key={country.cca3} to={`/country/${country.cca3}`}>
           {country.name.common} 
           </Link>
         })}
        </div>
        </div>
    )
}

export default CountriesList;