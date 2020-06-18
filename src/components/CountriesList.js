import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default class CountriesList extends React.Component {

    state = {
        countries: countries
    }

    render() {
        return (
            <>
                <div >
                    {
                        this.state.countries.map((country, index) => {
                            return (
                                <Link to={country.cca3}><div key={index}>
                                    <p>{country.flag} </p> 
                                    <p>{country.name.official}</p>
                                </div></Link>
                                
                            )
                        })
                    }
                </div>

            </>
        )
    }
}