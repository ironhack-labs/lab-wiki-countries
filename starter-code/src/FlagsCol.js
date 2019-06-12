import React from 'react';
import { NavLink } from 'react-router-dom'

function FlagsCol({data}) {
    data = data.sort((a, b) => 
    (a.translations.spa.official > b.translations.spa.official) ? 1 :
    (a.translations.spa.official < b.translations.spa.official) ? -1 : 0
  )

  return (
    <div className="col-5" style={{ 'maxHeight': '90vh', 'overflow': 'scroll' }}>
      <div className="list-group text-left">
        {data.map((country, i) => (
          <NavLink key={i} className="list-group-item list-group-item-action " to={`/${country.cca3}`}>
          <span className="mr-3">{country.flag}</span>{country.translations.spa.official}</NavLink> 
        ))}
      </div>
    </div>
  )
};


export default FlagsCol