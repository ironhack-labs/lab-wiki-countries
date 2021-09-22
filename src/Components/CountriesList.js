import React from 'react'
import { Link } from 'react-router-dom'
import countrie from './../countries.json'
import './CountriesList.css'


export default function CountriesList() {

    const displayAll = () => {
        return (

            countrie.map((countries, idx) => {
                return (
                    <div className="col-12" key={idx}>

                        <Link to={`/country-details/${countries.cca3}`} className="list-group-item list-group-item-action">{countries.flag} {countries.name.common}</Link>
                    </div>

                )
            })
        )
    }
    return (
        <div className="row col-4 countries-list">
            {displayAll()}
        </div>
    )
}

