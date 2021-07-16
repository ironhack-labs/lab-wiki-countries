import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


class CountriesList extends Component {


    render() {
        return (
            <div>
                {
                    this.props.map((country, i) => {
                        return(
                        <div>
                            <Link to={`/country-details/${country.alpha3Code}`} >{country.name}</Link>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CountriesList
