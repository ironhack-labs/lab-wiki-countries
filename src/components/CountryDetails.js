import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';


function CountryDetails () {

    const {alpha3Code} = useParams();
    console.log('alpha3Code is the id ->', alpha3Code);

    const [countryData, setCountryData] = useState(null);

    useEffect(()=> {
        const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;

        axios.get(apiUrl)
            .then(response => setCountryData(response.data))
            .catch(error => console.error('Error fetching country:', error));
    }, [alpha3Code]);

    return (
        <div>
            <h1>Country Details</h1>

            {!countryData && <h3>Country not found!</h3>}

            {countryData && (
                <>
                    <h3>{countryData.name.common}</h3>
                    <h4>{countryData.capital}</h4>
                    <p>{countryData.region}, {countryData.subregion}</p>
                    <Link to="/countries">Back</Link>
                </>
            )}
        </div>
    );
}

export default CountryDetails;