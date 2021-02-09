import React from 'react'
import countries from './countries.json'
import { Link } from "react-router-dom";

function ContriesList (props) {
    
    return (
        <div className='col-5'>
            <div className='list-group'>
                {countries.map((item, i) => (
                    <Link to={`/countrie/${item.cca3}`} key={item.cca3} className='list-group-item list-group-item-action' > {item.name.common} </Link>
                ))}             
            </div>

        </div>
    )
}

export default ContriesList