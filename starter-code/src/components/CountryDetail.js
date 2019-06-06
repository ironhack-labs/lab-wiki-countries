import React from 'react'

import queryString from 'query-string'


const CountryDetail = props => {

  const urlParams = props.match.params
  const qString = queryString.parse(props.location.search)


  return (

    <div>
      <h3>{qString.name}</h3>
      <h3>capita: {qString.capital}</h3>
      <h3>area: {qString.area} km2</h3>
      <h3>Borders: {qString.borders}</h3>
      {/* <ul>{qString.borders}</ul> */}
    </div>



  )
}

export default CountryDetail;