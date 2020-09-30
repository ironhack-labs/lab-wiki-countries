import React, { Component } from 'react'

import countries from '../../countries.json'

import './CountriesList.css'

import { NavLink } from 'react-router-dom'

class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }


    render() {

        return (

            <>
                <ul className="countriesUl">
                    
                    {this.state.countries.map(elm => <li><NavLink to={elm.cca3}  key={elm.cca3} >{elm.flag} {elm.name.official}</NavLink></li>)}
                    
                </ul>
            
            </>
        )
    }
}

export default CountriesList