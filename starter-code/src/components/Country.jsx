import React from 'react'
import {Link} from "react-router-dom";

const Country = (props) =>{
    return(
        <Link to={`/country/${props.cca3}`}>
            <p>{props.name.common}</p>
        </Link>
    )
}
export default Country