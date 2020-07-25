import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Country extends Component {
    
    render() {

        const {alpha3Code, name} = this.props.country

        return (
            <li>
                <Link to={`/details/${alpha3Code}`}>{name}</Link>
            </li>
        )
    }
}
