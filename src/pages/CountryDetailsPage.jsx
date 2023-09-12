import { countryDetail } from '../services/countries-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {

    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(false)

    const { alpha3Code } = useParams();

    useEffect(() => {
        countryDetail(alpha3Code)
        .then(countryElem => {
            setCountry(countryElem)
            setLoading(true)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div>
                {!loading ? <p>Loading...</p> : <h1>{JSON.stringify(country)}</h1>}
            </div>
            
        </>
    )
}

export default CountryDetails;
