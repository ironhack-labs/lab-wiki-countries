import React from 'react'
import { Link } from 'react-router-dom'


const CountriesList = ({list}) => {

    return (
        
    <div class="col-5" style={{height: 90 + "vh", overflow: "scroll"}}>
        {list.map(countries => {
            return(
                <div class="list-group">
                    <Link class="list-group-item list-group-item-action" to={countries.cca3}
                        >{countries.name.common}</Link>
                </div>
        )})}
    </div>
    )
}

export default CountriesList