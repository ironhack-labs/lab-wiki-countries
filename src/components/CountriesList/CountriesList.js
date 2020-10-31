import React from 'react'
import {Link} from 'react-router-dom'

export default function CountriesList(props) {
    // console.log(props)
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {props.countries.map((country) => {
                    return (
                    <div
                        key={country.cca3}>
                    <Link to={`/${country.cca3}`}>{`${country.flag} ${country.name.common}`}</Link>
                    </div>
                    )
                })}
          </div>
        </div>
    )
}
