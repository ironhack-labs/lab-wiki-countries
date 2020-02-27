import React from 'react'
import countries from "../../src/countries.json"
import './CountryDetail.css'

const Details = props => {
    
const code = props.match.params.code
    

const select = countries.filter(elm=> elm.cca3.includes(code))
let str = ""
select[0].borders.forEach(elm => {return str += ` ${elm}  |`})

    return (
        <div>
            <p>Pais: {select[0].name.official}!</p>
            <p>Capital: {select[0].capital}</p>
            <p>Area: {select[0].area}</p>
            <p>Frotera:{str}</p>
        </div>
    )
}

export default Details