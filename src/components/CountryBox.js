import React from 'react'
import data from '../countries.json'

import { Link } from 'react-router-dom';

export default function CountryBox(props){

    const{key, id, name, image} = props

    return(

        <div>
            <Link className="list-group-item list-group-item-action" to= {`/details/${id}`} >{image}{name}</Link> 
        </div>

    )


}
