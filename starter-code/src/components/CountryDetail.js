import React from 'react'
import Table from './Table';

const CountryDetail = props => {

  const foundCountry = props.countries.find(c => c.cca3 === props.match.params.cca3)

  return (
    <div className="col-7">
      <h3 className="country-detail-headline">{foundCountry.name.common}</h3>
      <Table foundCountry={foundCountry} className="table country-detail-table" />
    </div >
  )
}

export default CountryDetail;