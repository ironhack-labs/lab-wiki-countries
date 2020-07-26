import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Country extends Component {
    
    render() {

        const {alpha3Code, name, flag} = this.props.country

        return (
            <li className="ml-5 list-group-item">
                <img src={flag} alt={alpha3Code} className="flag mr-5"/>
                <Link to={`/details/${alpha3Code}`}>{name}</Link>
            </li>
        )
    }
}
