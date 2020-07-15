import React, { Component } from 'react'
import "./CountriesList.css"
import { NavLink } from "react-router-dom"

class ComponentList extends Component {
    constructor (){
        super ()
        this.state = {}
    }

    render() {
        const listItems = this.props.countries.map(elm => <NavLink activeStyle={{ fontWeight: "800" }} key={elm.cca3} className="list-group-item list-group-item-action" to={`/${elm.cca3}`}>{`${elm.flag} ${elm.demonym}`}</NavLink>)
        return (
            <div className="col-5">
                <div className="list-group">
                    {listItems}
                </div>
            </div>
        )
    }
}

export default ComponentList