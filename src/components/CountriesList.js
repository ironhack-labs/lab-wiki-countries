import React from 'react'
import countries from '../countries'
import {Route, Switch, Link} from 'react-router-dom'

class CountriesList extends React.Component{

    state = {
        countries: countries
    }

    render(){
        return (
            <div>
                {
                    this.state.countries.map((elem, index) => {
                        return <Link to={`/CountryDetails/{country.cca3}`}>
                        <ul>
                            <li>{elem.name.offical}</li>
                        </ul>
                        </Link>
                    })
                }
            </div>
        )
    }
}

export default CountriesList