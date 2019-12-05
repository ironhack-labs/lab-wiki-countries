import { Link } from 'react-router-dom'
import React, {Component} from 'react'
import countries from '../countries.json'

export default class Menu extends Component {
    state = {
        countries
    }
    render(){
        const {countries} = this.state
        return(
            <div className="Menu">
            {countries.map((country, i)=>(
                <Link key={i} to= {`/country/${country.cca3}`}>
                <p>{country.flag}{country.name.common}</p>
                </Link>
            ))}
            </div>
        )
    }

} 