import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {
    return (
        <div className="col-5" style={{height: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {props.countries.map(eachCountry => {
                    return (
                        <Link to={`/country-details/${eachCountry.cca3}`}
                            key={eachCountry.cca3} className="list-group-item list-group-item-action">
                            <p>{eachCountry.flag}</p>
                            <p>{eachCountry.name.common}</p>

                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesList
