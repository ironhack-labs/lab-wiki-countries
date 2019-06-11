import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import countries from '../src/countries.json'

class CountryList extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-5 scroll">
                            <div className="list-group">
                                {countries.map((country) => {
                                   return <Link to= {`${country.cca3}`} key={`${country.cca2}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryList;