import React from 'react';
import { Link } from 'react-router-dom';

import countriesData from '../../countries.json';

const CountryDetails = props => {
    const { countryCode } = props;
    const [ country, setCountry ] = React.useState();
    
    const getCountry = code => countriesData.find(country => country.cca3 === code);
    
    React.useEffect(() => {
        setCountry(getCountry(countryCode));
        
    }, [countryCode])
    
    console.log('rendering details')
    return (
        <div>
            {
                country ? (
                    <div>
                        <h1>{country.name.common}</h1>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Capital</td>
                                    <td>{country.capital[0]}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>{country.area + ' km' + String.fromCharCode(0x00B2)}</td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {
                                                country.borders.map(border => {
                                                    return (
                                                        <li key={border}>
                                                            <Link to={`/${border}`} >{border}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) 
            : 

            <h1>Select a country</h1>

            }
        </div>
    )
}

export default CountryDetails;