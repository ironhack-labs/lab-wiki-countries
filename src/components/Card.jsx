import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {

    const {name, alpha3Code} = props.country

  return (

    <Link to={`/${alpha3Code}`} style={{textDecoration: "none"}}>
        
        <div className="list-group">
            <p className="list-group-item list-group-item-action"><em>{alpha3Code}</em> {name.official}</p>
        </div>

    </Link>

  )
}

export default Card