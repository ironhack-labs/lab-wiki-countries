import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CountriesDetails({ list }){
   const [country, setCountry] = useState(null);
   const { code } = useParams();
   
   useEffect(() => {
        const filteredCountry = list.filter(x => x.alpha3Code === code);
        setCountry(filteredCountry[0])
   }, [ code, list ])

    return(
        <div className="CountriesDetails">
        {
            country && 
            <div className='countries-details-content'>
                <h3><b>Name: </b>{ country.name.common }</h3>
                <p><b>Capital: </b>{ country.capital }</p>
                <p><b>Area: </b> { country.area }</p>
                <p><b>Borders: </b></p>
                <ul>
                {
                    country.borders.map(border => (
                        <li key={ border }>{ border }</li>
                    ))
                }
                </ul>
            </div>
        }
        </div>
    )
}