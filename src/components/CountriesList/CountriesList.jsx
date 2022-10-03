import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchCountries } from './../../services/countries-services';

export default function CountriesList() {
    const [countries, setCountries] = useState(null)

    const getCountries = useCallback( async () => {
        const countries = await fetchCountries()
        setCountries(countries)
    }, [])

    useEffect(() => {
        getCountries()
    }, [getCountries])

  return (
    <div className='CountriesList'>
        {
            countries ? 
            (countries.map((country) => (
                    <div key={country._id}>
                        <Link to={country.alpha3Code} className="each-country" >
                            <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                            <p>{country.name.common}</p>
                        </Link>
                    </div>
                )
            ))
            :
            <p>Loading countries...</p>
        }
    </div>
  )
}
