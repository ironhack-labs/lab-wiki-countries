import React from 'react'
import {Link} from 'react-router-dom'


function CountriesList(props) {
  
  return (
    <div>
      <h2>Countries List</h2>
      
        {props.countries.map((oneCountry)=>{
          return(
            
            <Link className="list-group-item list-group-item-action" to={`/${oneCountry.alpha3Code}`} key={oneCountry.alpha3Code}>
              <img src={` https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}></img>
              <h2>{oneCountry.name.common}</h2>
            </Link>
          )
        })}
      +
    </div>
  )
}

export default CountriesList