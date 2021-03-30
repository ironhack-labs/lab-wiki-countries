import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = ({ countries }) => {
    return (
        <div className="list-group">
            { countries.map(c => {
                return (
                    <Link 
                        to={`/${c.alpha3Code}`}
                        href="#" 
                        key={c.alpha3Code} 
                        className="list-group-item list-group-item-action text-left"
                    >
                        <img src={c.flag} height="12px" alt={c.name} className="mr-2" /> {c.name}
                    </Link>
                    )
            }) }
        </div>
    )
}

export default CountriesList
