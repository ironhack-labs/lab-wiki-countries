import React from 'react'
import emojiFlags from 'emoji-flags'

import { Link } from 'react-router-dom'

const CountryListItem = ({ country }) => {
  return (
      <li className='list-group-item'>
        <Link className='text-dark' to={`/country/${country.alpha3Code}`} style={{textDecoration: "none"}}>
          {`${emojiFlags.countryCode(country.alpha2Code).emoji} ${country.name.common}`}
        </Link>
      </li>

  )
}

export default CountryListItem