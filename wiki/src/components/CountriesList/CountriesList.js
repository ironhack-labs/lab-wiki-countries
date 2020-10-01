import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'


const CountriesList = props => {

    return(
        
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
                {countries.map(elm => <div key={elm.cca3}><Link to={`/${elm.cca3}`} className="list-group-item list-group-item-action"><p>{elm.flag} {elm.name.official}</p></Link></div>)}
            </div>
        </div>

    )
}

export default CountriesList
