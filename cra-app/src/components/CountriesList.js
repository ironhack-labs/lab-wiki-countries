import React, { Component } from 'react'
import CountriesFromJson from '../countries.json'
import CountryLink from './CountryLink'


class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: CountriesFromJson
        }
    }

    render() {

        return (
            <>
                <div className="col-5 list">
                    <div className="list-group">
                        {this.state.countries.map((elm, idx) => <CountryLink key={idx} {...elm} />)}
                    </div>
                </div>
            </>

        )
    }
}

export default CountriesList