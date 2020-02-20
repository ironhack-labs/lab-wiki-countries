import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CountryDetail extends Component {
    state = { country: {} }
    
    componentDidUpdate() {
        const {getCountry, match: {params: {id: cca3}}} = this.props
        if( this.state.country.cca3 !== cca3 ) this.setState({country: getCountry(cca3)})
    }


    render() {
        if(!this.state.country.name ) return (<div></div>)
        const {country: {name: {common: countryName}, capital, area, borders}} = this.state
            return (
                <>
                {this.state.country.name && 
                <div>
                    <h2>{countryName}</h2>
                <p>Capital: {capital}</p>
                <p>Area: {area} km2</p>
                <div>
                    Borders:
                    <ul>{borders.map((border, i) => <li key={i}><Link to={`/${border.cca3}`}>{border.name}</Link></li>)}</ul> 
                </div>
                </div>}
                </>
        )
    }
}

export default CountryDetail
