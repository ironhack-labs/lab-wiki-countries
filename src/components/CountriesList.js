import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

const CountriesList = () => {
    const Countries = countries;

    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            {Countries.map((eachCountry, index) => {
                return (
                      <div key={index}>
                        <div className="list-group">
                          <Link className="list-group-item list-group-item-action" to={`/${eachCountry.cca3}`}>{eachCountry.flag} {eachCountry.name.common}</Link>
                        </div>
                      </div>
                    
                )
            })} 
        </div>        
    )
}

export default CountriesList
