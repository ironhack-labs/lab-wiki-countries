import React, { Component } from "react";
import countries from '../countries.json'
import { Link } from "react-router-dom";


class CountryList extends Component {
    constructor() {
        super()
        this.state = {
            Countries: countries
        }
    }
    render() {
        return (
            <div className="list-group">
                {this.state.Countries.map((elm, idx) => (
                    <div key={idx}>
                        <Link to={`/country/${elm.cca3}`}
                            className="list-group-item list-group-item-action">
                            {elm.flag} {elm.name.official}
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}



export default CountryList