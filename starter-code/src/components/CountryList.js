import React from 'react'

const CountryList = props => {
  return (
    <div className="col-5 country-table">
      <div className="list-group">
        {props.countries.map(f => <a href={f.cca3} key={f.cca3} className="list-group-item list-group-item-action">{f.flag}{f.name.common}</a>)}
      </div>
    </div>
  )
}


export default CountryList;
