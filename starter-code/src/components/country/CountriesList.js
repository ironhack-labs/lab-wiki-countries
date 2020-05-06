import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {

        return (
            <div className="list-group">
                {this.props.countries.map((elm, index) => <NavLink onClick={() => this.props.findCountry(elm.cca3)} className="list-group-item list-group-item-action" activeClassName="active" key={index} to={`/${elm.cca3}`}>{`${elm.flag} ${elm.name.common}`}</NavLink>)}
            </div>
        )
    }

}

export default CountriesList