import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'


export default class CountryDetail extends React.Component {

    state = {
        countries: countries
    }

    render() {
        return (
             <div >
                    { this.state.countries.map((country, i) => {
                            return (
                                <div key={i}>
                                <Link to={country.cca3}>
                                    <p>{country.flag} </p> 
                                    <p>{country.name.common}</p>
                                </Link>
                                </div>
                                    )
                            })
                    }
             </div>

                )
             }
        } 

        export default CountryDetail;