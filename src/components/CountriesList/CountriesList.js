import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './CountriesList.css'
import countriesFrom from '../../countries.json'

class CountriesList extends Component {
    constructor() {
        super()
        this.state = {
            countries: countriesFrom
        }
    }
    render() {
        return (
            <>
            <div className="col-5 list">
                <div className="list-group">
                    {this.state.countries.map(elm => <NavLink activeStyle={{ fontWeight: "800" }} key={elm.css3} className="list-group-item list-group-item-action" to={`/country/${elm.cca3}`}><span>{elm.flag}</span>{elm.name.common}</NavLink>)}
                </div>
                </div>
            </>
        )
    }

}


export default CountriesList