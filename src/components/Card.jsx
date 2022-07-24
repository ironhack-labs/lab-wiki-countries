import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {

    const {name, alpha3Code, alpha2Code} = props.country

  return (

    <Link to={`/${alpha3Code}`} style={{textDecoration: "none"}}>
        
        <div className="list-group-item list-group-item-action list-group">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt=""/>
            <p style={{alignSelf: "center"}}>{name.official}</p>
        </div>

    </Link>

  )
}

export default Card