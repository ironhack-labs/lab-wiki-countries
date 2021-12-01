import { Link } from 'react-router-dom'
import React from 'react'

const CountriesList = (props) => {
    return (
        <div>
            <h2>Countries List</h2>
            <div className="col-5">
            <div className="list-group">
                
            {props.allCountries.map((eachCountry) => {
                return <Link className="list-group-item list-group-item-action" key={eachCountry.cca3} to={`/eachCountry/${eachCountry.cca3}`}>{eachCountry.flag}
                    {eachCountry.name.common}
                </Link>
            })}
            </div>
            </div>
        </div>
    )
}

export default CountriesList