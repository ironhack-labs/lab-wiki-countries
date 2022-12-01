import { useEffect, useState } from 'react'
import axiosCountryAPI from '../../services/country.service'


const CountriesList = () => {

    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosCountryAPI
            .getCountries()
            .then((countries) => {
                setCountries(countries);
            })
            .catch((err) => {
                console.error(err);
                setError('Error');
            });
    }, []);

    return (
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            {
                countries.map((country) => {
                    return (<a key={country.alpha3Code} className="list-group-item list-group-item-action" href={country.alpha3Code}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.alpha2Code} />
                        <p>{country.name.common}</p>
                    </a>
                    )
                })}
        </div>

    )
}

export default CountriesList