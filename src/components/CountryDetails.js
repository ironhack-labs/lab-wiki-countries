import React from 'react'; 
import { useParams } from 'react-router-dom';

const CountryDetails = ({countries}) => {

    const { countryCode } = useParams();
    
    const country = countries.find(country => country.alpha3Code === countryCode) || {}

    return(
        <>
        <div className='col-6' style={{float: 'right', marginTop: '-400px'}}>
            <h1>{country.name.common}</h1>
            <p>teste</p>
        </div>
        </>
    )
}

export default CountryDetails;