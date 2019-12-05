import React, { Component } from 'react'
import {Link} from "react-router-dom"
import countries from "../countries.json"



export default class Container extends Component {
    state = {
        countriesArray : countries
    }

    render() {
        return (
            <div>
                <div className="overflow-auto" width="100px">
                    <div className="list-group ">
                        {this.state.countriesArray.map((country, index) => (
                            <Link key={index} to={`/${country.cca3}`}>
                                <p  key={index} className="list-group-item list-group-item-action ">{country.flag} {country.name.common} </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
