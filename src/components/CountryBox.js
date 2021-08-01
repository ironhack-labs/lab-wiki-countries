import React, {useState} from "react"
import data from "../countries.json"

import { Link } from 'react-router-dom';

function CountryBox (props){

    const { id, name, image } = props

    return(
        <div>
            <Link className="list-group-item list-group-item-action" to= {`/details/${id}`}> {image} {name} </Link>
        </div>
    )
}

export default CountryBox