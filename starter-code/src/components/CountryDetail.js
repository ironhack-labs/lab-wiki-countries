import React from "react";
import { Link } from "react-router-dom"

const Countries = (props) => {
    let {name, flag, cca3} = props.country
    return (
    <Link to={`/${cca3}`} className="list-group-item list-group-item-action">{flag} {name.common}</Link>
    )
};

export default Countries;
  
