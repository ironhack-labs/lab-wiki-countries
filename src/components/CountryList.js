import React from 'react'
import CountryListItem from './CountryListItem'
import { v4 as uuidv4 } from 'uuid';

const CountryList = ({ countries }) => {
  return (
    <div>
      <ul className="list-group">
        {countries.map(country => <CountryListItem key={uuidv4()} country={country} />)}
      </ul>
    </div>
  )
}

export default CountryList