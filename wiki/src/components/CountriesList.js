import React, { Component } from 'react'
import { Link } from "react-router-dom"
import CountryDetails from './CountryDetails'

const CountriesList = ({countries}) => {
    
    return (
        <>
            {countries.map(elm => <CountryDetails key={elm.cc3} name={elm.name.common} capital={elm.capital} area={elm.area} borders={elm.borders} />)}
        </>
    )
}

export default CountriesList