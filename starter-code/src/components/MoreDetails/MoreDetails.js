import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'



class MoreDetails extends Component {
        
    
    countryDetails = () => {
            let country = this.props.countries.find(eachCountry => {
                return eachCountry.cca3 === this.props.match.params.countryId
            })
            console.log(country)
            return (
                <div className="countryDetail">
                    <h2>Country Detail</h2>
                    <h3> {country.name.common}</h3>
                        <hr></hr>
                            <p>Capital: {country.capital}</p>
                            <hr></hr>
                                <p>Area: {country.area} km <sup>2</sup> </p>
                        <hr></hr>
                    </div> 
            )
       }

       borderCountries = () => {
        let Country = this.props.countries.find(eachCountry => {
        return eachCountry.cca3 === this.props.match.params.countryId
        }); 
        let borders = Country.borders.map((eachBorder, i) =>{
            return <li> <Link key={i} to ={`/${eachBorder}`}> {eachBorder} </Link> </li>
        }); return borders      
    }

    render() {
        return ( 
            <div>
                {this.countryDetails()}
                <hr></hr>
                Borders:
                <ul>
                {this.borderCountries()}
                </ul>
            </div>
        )      
    }
}

export default MoreDetails; 