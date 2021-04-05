import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CountriesList extends Component {

    state = {
        countries: this.props.countries
    }

    render() {
        return (
            <div className="col-5 CountriesList">
                <div className="list-group">
                {this.state.countries.map(country => {
                    return (<NavLink to={country.cca3} className="list-group-item list-group-item-action" key={country.cca3} activeStyle={{fontWeight: "bold"}}>{country.flag} {country.name.common}</NavLink>)
                    }
                )}
                </div>
            </div>
        )
    }
}



