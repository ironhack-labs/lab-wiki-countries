import { useEffect, useState } from 'react'
import axiosCountryAPI from '../../services/country.service'
import { useParams } from 'react-router-dom';
const CountryDetails = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [countryId] = useParams
    useEffect(() => {
        axiosCountryAPI
            .getCountry(countryId)
            .then((country) => {
                setCountries(country);
            })
            .catch((err) => {
                console.error(err);
                setError('Error');
            });
    }, [axiosCountryAPI.getCountry]);
    return (
        <div>
            <p>{countries.name.common}</p>
        </div>
    )

}

export default CountryDetails