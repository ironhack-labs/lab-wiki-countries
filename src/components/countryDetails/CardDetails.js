import React from 'react'
import { Link } from 'react-router-dom'

const CardDetails = props => {
    return (
        <div>
            <h1>{props.name.common}</h1>
            <hr />
            <p><strong>Capital : </strong>{props.capital}</p>
            <hr />
            <p><strong>Area : </strong> {props.area}</p>
            <hr />
            <div><strong>Borders : </strong> <ul>{props.borders.map(elm => <li><Link>{elm}</Link></li>)}</ul></div>
        </div>
    )
}

export default CardDetails