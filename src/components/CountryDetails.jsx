import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function CountryDetails({ countries }) {

  const { alpha3Code } = useParams();

  return (
    <div className="w-1/2 flex justify-center pt-14">
      {countries.filter(country => country.alpha3Code === alpha3Code).map(filteredCountry => (

        <div className="w-1/2 flex flex-col items-center text-center">
          <div>
            <img
              className='h-16 mx-auto mb-4 hover:scale-125 transition-all duration-300 ease-in-out'
              src={`https://flagpedia.net/data/flags/icon/72x54/${filteredCountry.alpha2Code.toLowerCase()}.png`} alt='Flag'></img>
            <p className="text-xl font-bold mb-2">{filteredCountry.name.common}</p>
            <p className="mt-2">Capital: {filteredCountry.capital}</p>
            <p className="mt-2">Area: {filteredCountry.area} km2</p>
            <p className="my-2 underline">Borders:</p>
            <ul>
              {filteredCountry.borders.map((border) => {
                const matchingCountries = countries.filter((country) => country.alpha3Code === border);
                const countryNames = matchingCountries.map((country) => country.name.common);
                return (
                  <li
                    key={border}
                    className="font-semibold  text-blue-500 hover:scale-105"
                  >
                    <Link to={`/${border}`}>{countryNames.join(",")}</Link>
                  </li>);
              })}
            </ul>
          </div>
        </div>

      ))}
    </div>
  )
}

export default CountryDetails