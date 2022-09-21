import { useState } from 'react';
import { Link } from 'react-router-dom';
import AllCountries from '../countries.json'


const CountriesList = () => {
    const [countries, setCountries] = useState(AllCountries);

    return (
        <div className='listCountries'>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code} className='country'>
                        <Link to={`/country-details/${country.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                            <h4>{country.name.official}</h4>
                        </Link>
                    </div>

                )


            })}
        </div>
    )
}

export default CountriesList