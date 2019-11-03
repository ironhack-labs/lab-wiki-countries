import React from 'react';
import  { Link } from 'react-router-dom';
const Country = (props) => {
  const { name, cca3, flag } = props.country;
  return (
    <Link className="list-group-item list-group-item-action" to={`/${cca3}`}>{flag} {name.common}</Link> 
  )

}

export default Country;