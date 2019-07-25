import React from 'react';
import {NavLink} from 'react-router-dom';

const CountryList = (props) => {
  console.log(props)
  return (
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
      { props.countries.map((country, index) => {
        return <NavLink to={`/${country.cca3}`}
                key={index} style={{listStyle: "none"}}
                className="list-group-item list-group-item-action">
                {country.flag} {country.name.common}
                </NavLink>
      }) }
      </div>
    </div>
  )
}
export default CountryList;