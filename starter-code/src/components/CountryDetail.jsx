import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CountryDetail(props) {
        return ( 
                <NavLink to={`/${props.code}`} className="list-group-item list-group-item-action">
                <div className="list-group">
                {props.flag} {props.name}
                </div>
                </NavLink>
      );
}
