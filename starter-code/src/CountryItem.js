import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class CountryItem extends Component {
    render() {
        return (
           
                <Link to=>
                { this.props.countryInfo.name.common}
                </Link>
                  
        )
    }
}
