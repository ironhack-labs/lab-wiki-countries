import React from 'react'
import { NavLink } from 'react-router-dom';

const ListElement = (props) => {
  return (
    <NavLink to={`/details/${props.cca3}`} 
    className="list-group-item list-group-item-action"
    activeClassName="active">
    {`${props.flag} ${props.name.common}`}
    </NavLink>
  );
}

export default ListElement;