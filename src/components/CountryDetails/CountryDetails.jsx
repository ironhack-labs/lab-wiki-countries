import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CountriesList from '../CountriesList/CountriesList'
import countriesData from './../../countries.json'


function CountryDetails({ countriesData }) {

    const [countries, setCountries] = useState(countriesData)
    const { countryId } = useParams()

    useEffect(() => {
        console.log(countryId)
        const foundCountry = countriesData.filter(e => countryId === e.countryId)
        setCountries(foundCountry)

    }, [countryId]);

    return (
        <div>
            {countries.map((e) => {
                return (
                    <div>
                        <div>
                            {/* <p>{countryId}</p> */}
                            <p>{e.name.common}</p>
                            <p>{e.capital}</p>
                            <p>{e.area}</p>  
                        </div>
                    </div>

                )
            })
            }
        </div>
    )
}

export default CountryDetails
