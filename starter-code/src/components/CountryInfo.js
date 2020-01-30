import React from 'react'

const CountryInfo = (props) => {
  console.info('Hey! => ', props)
  return(
    <div>
      {props.match.params.countryCca3}
    </div>
  )
}

export default CountryInfo;