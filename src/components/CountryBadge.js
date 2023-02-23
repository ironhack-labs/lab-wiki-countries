import React from 'react'
import emojiFlags from 'emoji-flags'

import { Link } from 'react-router-dom'

const CountryBadge = ({ country }) => {
  return (
    <Link to={`/country/${country.alpha3Code}`}>
      <span class="badge text-bg-primary ms-1">
        {`${emojiFlags.countryCode(country.alpha2Code).emoji} ${country.name.common}`}
      </span>
    </Link>
  )
}

export default CountryBadge