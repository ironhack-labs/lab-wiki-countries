import React from 'react'

const CountryInfo = (props) => {
  
  debugger
  return(
    <div>
      {props.match.params.name}
    </div>
  )
}

export default CountryInfo;