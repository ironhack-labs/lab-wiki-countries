import React, {Component} from 'react'
import countries from './../countries.json'
import { Link } from 'react-router-dom';

class CountriesList extends Component {
    constructor (){
        super ()
        this.state = {
            jsoncountries: countries
        }
    }

    render () {
        return (
            <>
           
            <div className="list-group">
            {
                this.state.jsoncountries.map((country, index)=>
                    <Link to={`/countries/${country.cca3}`} key={index}>
                        <div className="list-group-item list-group-item-action">
                            <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt="foto bandera"/>
                            <div className="country-name">{country.name.common}</div>
                        </div>
                    </Link>
                )
            }
        </div>
        </>
        )
    }
}

export default CountriesList