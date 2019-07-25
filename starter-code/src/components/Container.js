import React from 'react';
import { Link } from 'react-router-dom'
const Container = (props) => {
  
  return (
    <Link className="list-group-item list-group-item-action" to={`/${props.countryInfo.cca3}`}>{props.countryInfo.flag} {props.countryInfo.name.common}</Link>
  )
}

export default Container;
