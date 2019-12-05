import React from "react"
import {Link} from 'react-router-dom'

const Country = (props)=>{
    return (
        <>
        <div className="border border-dark">
            <Link to={props.cca3} className="list-group-item list-group-item-action">
                {props.flag} {props.name.official}
            </Link>
        </div>
        </>
    )
}

export default Country