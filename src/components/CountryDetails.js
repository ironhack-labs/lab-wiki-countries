import React from 'react'; 
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

    const { countryCode } = useParams();
    console.log(countryCode)

    return(
        <h1>Olá</h1>
    )
}

export default CountryDetails;