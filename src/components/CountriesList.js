import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CountriesList extends Component {

    render() {
        const {countries} = this.props
        return (
            <div style={{borderStyle: "solid", margin: "20px", padding: "10px", borderRadius: "10px"}}>
                   {
                    countries.map((country, i) => {
                        return <p key={i}>
                            <Link style={{textDecoration: "none", color: "black"}} to={`/${country.alpha3Code}`}><img src={country.flag} alt="flag" style={{width: '20px'}}></img> {country.name}</Link>
                            <hr/></p>
                    })
                } 
            </div>
        )
    }
}

export default CountriesList