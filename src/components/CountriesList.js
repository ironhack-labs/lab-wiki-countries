import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'

function CountriesList(props) {
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className='list-group'>
                {props.countriesList.map(country => {
                    return <Link
                    key={country.cca3}
                    to={`${country.cca3}`}
                    >
                        {country.name.common}
                    </Link>
                })}
            </div>
        </div>
    )
}
export default CountriesList;