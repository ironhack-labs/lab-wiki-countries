import React from 'react'
import{Link} from 'react-router-dom'

export default function CountriesList(props) {
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
            {props.countriesList.map(country => {
                    return (
                    <Link 
                        to={`/${country.cca3}`}
                        key={country.cca3} 
                        className="list-group-item list-group-item-action"
                    >
                        {country.name.common}
                     </Link>
                    )
                })}
            </div>
        </div>
    )
}