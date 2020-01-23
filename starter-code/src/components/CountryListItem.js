import React from 'react';
import {Link} from 'react-router-dom'

const CountryListItem = (props) => {
  let {cca3, flag, name} = props.country;
  return (
    <Link className="list-group-item list-group-item-action text-left" to={`/${cca3}`}>{flag} {name.common}</Link>
  )

}

export default CountryListItem;