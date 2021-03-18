import {Link} from "react-router-dom"

import React, { Component } from 'react'

export default class CountriesList extends Component {
    render() {
        return (
            <div style={{textAlign : "left"}}>
                {this.props.countries.map((country)=>
                <Link to={`/countries/${country.cca3}`}  key={country.cca3}>{country.name["common"]}<br></br></Link>)}
            </div>
        )
    }
}
