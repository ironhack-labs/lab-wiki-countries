import { countryDetail, countriesList } from '../services/countries-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CountryDetail.css'

function CountryDetails() {

    const [country, setCountry] = useState(null)
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    const { alpha3Code } = useParams();

    // Get country 
    useEffect(() => {
        countryDetail(alpha3Code)
        .then(countryElem => {
            setCountry(countryElem)
            setLoading(true)
        })
        .catch(err => {
            console.log(err)
        })
    }, [alpha3Code])

    // Get all countries
    useEffect(() => {
        countriesList()
        .then(countries => {
            setCountries(countries)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const filteredCountries = countries.filter((countryElem) => country.borders.includes(countryElem.alpha3Code))
    console.log('filtered countries:', filteredCountries)

    console.log(country)

    return (
        <>
            <h1 className="mt-4">Country details</h1>
                {!loading ? <h3 className="mt-4">Loading...</h3> : 
                (
                <>
                    <div className="mt-4 mb-4">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                        <h2 className="mt-2">{country.name.common}</h2>

                    </div>
                    <div className="mt-4 country-info">
                        <div className="info-column">
                            <p>Capital</p>
                            <hr />
                            <p>Area</p>
                            <hr />
                            <p>Borders</p>
                            <hr />
                        </div>
                        <div className="info-column">
                            <p>{country.capital[0]}</p>
                            <hr />
                            <p>{country.area} km²</p>
                            <hr />
                            {filteredCountries.map((country) => (
                                <div className="mb-2">
                                <Link key={country._id} to={`/country/${country.alpha3Code}`}>{country.alpha3Code}</Link>
                                </div>
                            ))}
                            <hr />
                        </div>
                    </div>
                </>
                ) }
        </>
    )
}

export default CountryDetails;
