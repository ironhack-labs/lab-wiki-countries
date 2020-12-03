import React, { Component } from 'react'
import Countries from '../countries.json'
import { NavLink } from 'react-router-dom'

class CountriesList extends Component {
    constructor() {
        super()
        this.state = {
            countries: []
        }
    }

    componentDidMount = () => this.setState({ countries: Countries })

    render() {

        return (
            <div className='list-group'>
                { this.state.countries.map(elm => {
                    return (
                        <NavLink key={elm.cca3} to={'/details?code=' + elm.cca3} className='list-group-item-action' >   {/*list-group-item*/}
                            <img src={'https://www.countryflags.io/' + elm.cca2.toLowerCase() + '/flat/64.png'} alt={elm.name.common} />
                            {elm.name.common}
                        </NavLink>
                    )
                })}
            </div>
        )
    }
}

export default CountriesList