import React from 'react'
import {Link} from "react-router-dom";

const Country = (props) =>{
    return(
        <Link to={`/country/${props.cca3}`}>
            <li className="list-group-item">
                <p>{props.name.common}</p>
            </li>
        </Link>
    )
}
export default Country