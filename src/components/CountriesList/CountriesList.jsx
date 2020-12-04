//list of links with countries names, link will be used to send country code 
import React, { Component } from 'react'
import Countries from '../../countries.json'
import {Link, Route} from "react-router-dom"
import CountryDetails from "../CountryDetails/CountryDetails"


export default class CountriesList extends Component {
    render() {
        // console.log("countries", Countries)

        return (
            <div>
            <div style={{className:"list-group"}}>
           
                {Countries.map((country) => {
                return <Link to={`/CountryDetails/${country.cca3}`} key={country.cca3} style={{className: "list-group-item list-group-item-action"}}> {country.flag} {country.name.common}</Link>
                })
                }

            </div>
            </div>
        )
    }
}


