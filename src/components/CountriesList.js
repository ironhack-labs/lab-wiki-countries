import React from 'react'
import countries from './../countries.json'
import { Link } from 'react-router-dom'

const CountriesList = () => {

    
        return (
            <div className="container">
                <div className="row">
                     <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                        {countries.map((eachCountry) => {
                            return (
                                <div className="list-group" key={eachCountry.cca3}>
                                <Link to={`/${eachCountry.cca3}`} className="list-group-item list-group-item-action">
                                    <span role="img">{eachCountry.flag}</span>
                                    {eachCountry.name.common}
                                </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    
}

export default CountriesList;
