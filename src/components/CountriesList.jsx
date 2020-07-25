import React, { Component } from 'react'
import Country from './Country'

export class CountriesList extends Component {
    render() {

        const { data } = this.props
        const renderCountryList = data.map(country => <Country country={country} key={country.alpha3Code}/>)

        return (
            <div className="col">
                <ul className="list-group">
                    {renderCountryList}
                </ul>
            </div>
        )
    }
}

export default CountriesList
