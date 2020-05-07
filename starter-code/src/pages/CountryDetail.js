import React from 'react'
import CountryList from '../countries.json'
import Card from '../components/Card'
import Countries from '../pages/Countries'

function CountriesDetail(props) {
  const {
    params: { id },
  } = props.match
  return (
    <div className="countryDet">
      <Countries />
      <div>
        {CountryList.filter((country) => country.cca3 === id).map((country) => (
          <Card {...country} />
        ))}
      </div>
    </div>
  )
}

export default CountriesDetail
