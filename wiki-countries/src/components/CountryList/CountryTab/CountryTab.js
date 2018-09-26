import React from 'react';
import { NavLink } from 'react-router-dom';

const countryTab = ({ name, id, select }) => {

    return (
        <NavLink to={`/countries/:${id}`} exact onClick={ () => select(id) } className="list-group-item list-group-item-action" activeClassName="active">{name}</NavLink>
    );
};

export default countryTab;