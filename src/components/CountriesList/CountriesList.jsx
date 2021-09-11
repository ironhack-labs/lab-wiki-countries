import React from "react"
import "./CountriesList.css"
import Countries from "../../countries.json"
import { Link } from "react-router-dom"

export default class CountriesList extends React.Component{
    state = {
        countries: Countries
    }

    render(){
        return(
            <div className="CountriesList">
                {this.state.countries.map((country) => {
                    return (
                        <ul>
                            <li><Link>{country.name.official}</Link></li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
