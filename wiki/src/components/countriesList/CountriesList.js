import React, { Component } from 'react';
import CountryItem from '../countryItem/CountryItem'

const CountriesList = ({countries}) => {
    return (
        <ul>                
            {countries.map(elm => <CountryItem key={elm.CCA3} {...elm} />)}    
        </ul>
    )
}

export default CountriesList