import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import countries from './countries.json'
export default class CountryDetail extends Component {

    bordercountry = (borders) => {

        let borderId = []
        
        borders.map(border =>{
            countries.forEach(theCountry =>{
                    if(theCountry.cca3 === border) borderId.push(theCountry)
                })
            })
            
       let displayborder = borderId.map(eachBorder => {
            console.log(eachBorder.name.official)
            return (
           <Link to={`/CountryDetail/${eachBorder.cca3}`}> <li>{eachBorder.name.official}</li> </Link>
                
            )    
        })
        return displayborder
    }

    render() {
        let id = this.props.match.params.id
  let countryId = countries.find(theCountry =>{
    return theCountry.cca3 === id
   })
        return (
            <div>
                <h1>{countryId.name.common}</h1>
                <p>Capital: {countryId.capital}</p>
                <p>Area: {countryId.area}</p>
                <p>Borders:</p>
                 <ol>
                 {this.bordercountry(countryId.borders)}
                </ol>
            </div>
        )
    }
}
