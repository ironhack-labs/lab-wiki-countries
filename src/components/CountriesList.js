import React from 'react';
import { Link } from 'react-router-dom'

const CountriesList = (props) => {

    const format = { maxHeight: "90vh", overflow: "scroll" }

    return (
        <div className="col-5" style={format} >
            <div className="list-group">
                {props.countries.map(country => {
                    return <Link className="list-group-item list-group-item-action" key={country.cca3} to={`/country/${country.cca3}`}>
                        {country.flag} {country.name.common}
                    </Link>
                })}
            </div>
          </div>
    )
}

export default CountriesList