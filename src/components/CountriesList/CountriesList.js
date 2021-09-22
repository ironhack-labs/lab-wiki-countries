import React from 'react'
import { Link } from 'react-router-dom'
import countrie from '../../countries.json'


const CountriesList = () => {
    const displayAll = () => {
        return (
            countrie.map((countries, id) => {
                return (
                    <div className="col-md-12" key={id}>
                        <Link to={`/countrydetails/${countries.cca3}`} className="list-group-item list-group-item-action">{countries.flag} {countries.name.common}</Link>
                    </div>
                )
            })
        )
    }
    return (
        <div className="row col-5 list-group">
            {
                displayAll()
            }
        </div>
    )
}

export default CountriesList