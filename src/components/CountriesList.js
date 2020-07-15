import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import CountryDetail from './CountryDetail'

class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCountries: props.listCountries,
            activeCountry: undefined
        }
    }

    
    render() {

        // console.log(this.state.listCountries)

        return (
            <>
                    <ul>
                        {this.state.listCountries.map((elm, idx) =>
                            (
                                <li><NavLink className="list-group-item list-group-item-action" to={`/country-detail/${elm.cca3}`} key={idx}>{elm.setflag} {elm.name.common}</NavLink></li>

                            )
                        )}
                    </ul>

            </>
        )
    }
}

export default CountriesList;