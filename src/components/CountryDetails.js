import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import emojiFlags from 'emoji-flags'
import CountryBadge from './CountryBadge'

const CountryDetails = ({ countries }) => {
  const { countryCode } = useParams();
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    const countryFromParams = countries.find(country => country.alpha3Code === countryCode);
    console.log(countryFromParams);
    setCurrentCountry(countryFromParams);

  }, [countryCode]);

  console.log(countryCode);

  if (currentCountry) {
    return (
      <div className='container'>
        <div className="card">
          <div className="card-body">
          <h2 className="card-title m-2">{`${emojiFlags.countryCode(currentCountry.alpha2Code).emoji} ${currentCountry.name.common}`}</h2>
          </div>
          <ul className='list-group list-group-flush m-0'>
            <li className='list-group-item'>
              <div className="row">
                <div className="col fw-bold text-start">Capital:</div>
                <div className="col text-end">{currentCountry.capital[0]}</div>
              </div>
            </li>
            <li className='list-group-item'>
              <div className="row">
                <div className="col fw-bold text-start">Area:</div>
                <div className="col text-end">{`${currentCountry.area} km²`}</div>
              </div>
            </li>
            <li className='list-group-item'>
              <div className="row">
                <div className="col fw-bold text-start">Borders:</div>
                <div className="col text-end">
                  {currentCountry.borders.map(countryCode => {
                    const borderingCountry = countries.find(country => country.alpha3Code === countryCode);
                    
                    return <CountryBadge country={borderingCountry} />
                  })}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }


}

export default CountryDetails