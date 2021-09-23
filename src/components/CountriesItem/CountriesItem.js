import React from 'react'
import { Link } from 'react-router-dom'


export default function CountriesItem({ common }) {
    return (
        <div>
            <h3>Name: {common}</h3>
 
            <Link to={`/countries/${common}`}>View Details</Link>
            <hr />
        </div>
    )
}