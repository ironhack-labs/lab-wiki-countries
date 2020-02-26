import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { listCountries: props.countries }
    }
    render() {

        return (
            <div className='list-group'>
                {this.state.listCountries.map((country) => {
                    return <Link key={country.cca3} className='list-group-item list-group-item-action d-flex justify-content-start align-items-center' to={`/${country.cca3}`}>
                        <img src={`https://www.countryflags.io/${country.cca2}/shiny/64.png`} alt={country.cca2} />
                        <span className='ml-4'>{country.name.official}</span></Link>
                })}
            </div>
        )
    }
}

export default Navbar