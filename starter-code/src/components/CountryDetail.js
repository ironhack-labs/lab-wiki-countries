import React from 'react'
import countries from '../countries.json';
import Table from './Table';

const CountryDetail = props => {
  const getCountry = id => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id
    }
    return countries.find(theCountry)
  }

  const { params } = props.match
  const foundCountry = getCountry(params.id)

  return (
    <div className="col-7">
      <h3 className="country-detail-headline">{foundCountry.name.common}</h3>
      <Table foundCountry={foundCountry} className="table country-detail-table" />
    </div >
  )
}

export default CountryDetail;