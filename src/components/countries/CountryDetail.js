import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CountryBorders from './CountryBorders';

const CountryDetails = props => {

    const { name, capital, area } = props.location.state.country
    const borders = props.location.state.borders
    const countries = props.location.state.countries

    return (
        <div key={name}>
            <div className="row">
                <h2>{name}</h2>
            </div>
            <div className="row">
                <p>Capital: {capital}</p>
            </div>
            <div className="row">
                <p>Area: {area} km2</p>
            </div>
            <div className="row">
                <div className="column">
                    <p>Borders: </p>
                </div>
                <div className="column">
                    <ul>
                        <CountryBorders borders={borders} countries={countries} />
                    </ul>
                </div> 
            </div>
        </div>  
    )
}

export default CountryDetails
