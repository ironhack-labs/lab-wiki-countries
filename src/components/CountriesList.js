import React from 'react'

import { Link } from "react-router-dom"
const CountriesList = (props) => {

    const divStyle = {
        maxHeight: "90vh",
        overflow: "scroll"
    }

    return (

        <div style={divStyle}>
            <div className="list-group">
                <h2>CountriesList</h2>
                {props.listOfCountries.map((country) => {
                    return (
                        <Link to={country.alpha3Code} key={country.alpha3Code} className="list-group-item list-group-item-action">{country.name.common}</Link>
                    )
                })
                }
            </div>
        </div>

    )
}

export default CountriesList