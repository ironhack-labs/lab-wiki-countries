import React from 'react'
import countries from "../../src/countries.json"

const Details = props => {
    
const code = props.match.params.code
    

const select = countries.filter(elm=> elm.cca3.includes(code))

    return (
        <div>
            <p>¡Hola {select[0].name.common}!</p>
            <p>Capital: {select[0].capital}</p>
            <p>Area: {select[0].area}</p>
        </div>
    )
}

export default Details