import React, { Component } from 'react'
import countries from '../countries.json'
import List from './List'

class CountryDetail extends Component {
    constructor() {
        super()
        this.state = {
            allCountries: countries
        }

    }

    render() {
        return (
            <React.Fragment>
                {
                    countries.map((elm, idx) => {
                        return (<List key={idx} name={elm.name.common} flag={elm.flag} />)
                    })
                }
            </React.Fragment>
        )
    }

}

export default CountryDetail