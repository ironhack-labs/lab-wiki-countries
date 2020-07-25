import React, { Component } from 'react'

export default class CountryDetails extends Component {
    render() {

        const {match, data} = this.props
        const countryCode = match.params.id

        const renderDetails = data.find(country => country.alpha3Code === countryCode)

        return (
            <div className="col" key={countryCode}>
                <h1>Country Details</h1>
            <div key={countryCode}>
                <h3>{renderDetails.name}</h3> 
                <p><strong>Capital:</strong> {renderDetails.capital}</p>
                <p><strong>Area:</strong> {renderDetails.area}</p>
            </div>
            </div>
        )
    }
}
