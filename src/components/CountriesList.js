import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'

class CountriesList extends Component {
    




    render() {
        return (
            <div>
             <ul className="list-group-item" >
                
            {countries.map((eachCountry)=>{
                return <li className="list-group-item"> {eachCountry.cca2.toLowerCase()} <Link to = {`/countrydetail/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>

            })}
            </ul>   
            </div>
        )
    }
}

export default CountriesList
