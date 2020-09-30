import React from 'react'
import { Link } from "react-router-dom";

export default class CountriesList extends React.Component {

    Update = (event) => {
        // event.preventDefault()
        // window.location.reload()
    }

    render() {
        return (
            <div className="country-list">
                <ul className="list-group">
                    {this.props.countries.map(country => {
                        return (
                            <Link onClick={this.Update} key={country.translations['spa'].official} to={country.cca3}><li  id={country.translations['spa'].official} className="list-group-item">{country.flag} {country.translations['spa'].official}</li></Link>)
                    })
                    }
                </ul>
            </div>
        )
    }
}
