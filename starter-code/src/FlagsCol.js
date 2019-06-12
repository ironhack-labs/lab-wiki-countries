import React from 'react';
import { NavLink } from 'react-router-dom'

function FlagsCol({data}) {
  return (
    <div className="col-5" style={{ 'maxHeight': '90vh', 'overflow': 'scroll' }}>
      <div className="list-group text-left">
        {data.map((country, i) => (
          <NavLink key={i} className="list-group-item list-group-item-action " to={`/${country.cca3}`}>
          {country.flag}  {country.name.common}</NavLink> 
        ))}
      </div>
    </div>
  )
};


export default FlagsCol