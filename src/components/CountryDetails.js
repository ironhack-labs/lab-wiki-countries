import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
    const { countryId } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios
        .get('https://ih-countries-api.herokuapp.com/countries' + countryId)
        .then( response => {
            setDetails(response.data);
        })
        .catch(e => console.log('error getting country from the API', e));
    }, [countryId]);

    return (
        <div>
            <h3>Country Name: {details.name.official}</h3>
            <p>Area: {details.area}</p>
            <p>Borders: {details.borders}</p>
        </div>
    );
}

export default CountryDetails;