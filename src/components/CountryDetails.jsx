import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CountriesData from '../countries.json';

const CountryDetails = () => {

    const [country, setCountry] = useState({});
    const { idCountry } = useParams();

    console.log('PRIMERRRRRRROOOO', idCountry)

    useEffect(() => {
        const find = CountriesData.find((country) => country.alpha3Code === idCountry);
        setCountry(find);
    }, [idCountry]);

    console.log('AQUIIIII LA COUNTRY ELEGIDA!!!!', country)

    return <div>{country.alpha3Code ? <>
        <div className='details-country'>
            <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.webp`} alt="" />
            <h1>{country.name.common}</h1>
            <h6> <strong>Capital:</strong>  {country.capital}</h6>
            <h6><strong>Area:</strong> {country.area}</h6>
        </div>
    </> : null}</div>;
}

export default CountryDetails