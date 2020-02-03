import React from 'react'



const CountryInfo = (props) => {

  const country = props.countries.map(p => {
    p.cca3 === props.match.params
    ? return true
    : return false
  })

  // const country = props.country.map(p => p)
  debugger
  console.log(country)
  
  return(
    <div>
      aaaaaa
    </div>
  )
}

export default CountryInfo;