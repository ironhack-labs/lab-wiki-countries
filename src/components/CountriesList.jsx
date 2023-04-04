import React from 'react'
import { Link } from 'react-router-dom';


function CountriesList({ countries }) {

  return (
    <div className="max-h-[45rem] w-full overflow-y-scroll overflow-x-hidden px-20 mt-14">
      <ul>
        {countries.map((country) => (
          <Link to={`/${country.alpha3Code}`}>
            <li
              key={country.name.common}
              className='border-2 w-full h-36 flex flex-col items-center justify-center mb-4 hover:scale-110 transition-all duration-300 ease-in-out hover:bg-slate-500 hover:text-white hover:font-semibold'>
              <img
                className='w-1/6 mb-3'
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='Flag'></img>
              <p>{country.name.common}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CountriesList