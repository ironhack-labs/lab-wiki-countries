import React from 'react'
import countries from './countries.json'
import {Link} from 'react-router-dom'

function Details(props) {

    const getCountry = id => countries.find(obj => obj.cca3 === id);

    const { params } = props.match;
  
    const foundCountry = getCountry(params.id);
    console.log(foundCountry)

    return (
        <div>
            <h1>{foundCountry.name.common}</h1>
            <h2>Capital: {foundCountry.capital}</h2>
            <h2>Area: {foundCountry.area}KM2</h2>
            <h2>Borders: </h2>

            {foundCountry.borders.map(eachCountry => {
                return( <li><Link to={getCountry(eachCountry).cca3}>{getCountry(eachCountry).name.common}</Link></li>)
        })}


            
        </div>
    )
}

export default Details
