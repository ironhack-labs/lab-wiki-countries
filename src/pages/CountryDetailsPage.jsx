import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCountryDetail } from '../services/countryService';

const CountryDetailsPage = () => {
    const { alpha3code } = useParams()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        getCountryDetail(alpha3code)
            .then(countryApi => {
                setCountry(countryApi)
            })
            .catch(err => {
                console.error(err)
            })
    }, [alpha3code])

    if (!country) return 'Loading...'

    return (
        <div>
            <h1>Country details</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
            <h4>{country.name.common}</h4>
            <div>
                <h2>CAPITAL - {country.capital[0]}</h2>
                <h2>Area - {country.area} km2</h2>
                <div>
                    <h2>Borders</h2>
                    <ul>
                        {country.borders.map((alpha3Code) => {
                            return (
                                <li key={alpha3Code}>
                                    <Link to={`/detail/${alpha3Code}`} >
                                        {alpha3Code}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailsPage;