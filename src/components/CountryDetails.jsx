import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = ({ match }) => {
    const [thisCountry, setThisCountry] = useState({
        name: '',
        capital: '',
        area: 0,
        borders: []
    });

    const loadCountry = () => {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${match.params.alpha3Code}?fields=name;capital;area;borders`)
        .then(jsonResponse => {
            console.log(jsonResponse.data);
            setThisCountry(jsonResponse.data)
        })
        .catch(err => console.error(err));
    }

    // useEffect(() => {
    //     loadCountry();
    // }, [])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${match.params.alpha3Code}?fields=name;capital;area;borders`)
        .then(jsonResponse => {
            console.log(jsonResponse.data);
            setThisCountry(jsonResponse.data)
        })
        .catch(err => console.error(err));
    }, [match.params.alpha3Code, setThisCountry])

    // const fetchBorderingCountryName = (alpha3Code) => {

    // }

    // const getBorderingCountryName = (alpha3Code) => {
    //     axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}?fields=name`)
    //     .then(({ name }) => {
    //         return name
    //     })
    //     .catch(err => console.error(err));        
    // }

    // const thisCountry = getCountry(match.params.alpha3Code);

    return (
        <div className='w-50'>
            <h1>
                {thisCountry.name}
            </h1>
            <table className='table w-75'>
                <tbody>
                    <tr key='capital'>
                        <th scope='row'>
                            Capital
                        </th>
                        <td>
                            {thisCountry.capital}
                        </td>
                    </tr>
                    <tr key='area'>
                        <th scope='row'>
                            Area
                        </th>
                        <td>
                            {thisCountry.area + ' '}km<sup>2</sup>
                        </td>
                    </tr>
                    <tr key='borders'>
                        <th scope='row'>
                            Border
                        </th>
                        <td>
                            <ul className='list-group'>
                                {
                                    thisCountry.borders.length > 0
                                    ? 
                                        thisCountry.borders.map(alpha3Code => {
                                            return(
                                                <li className='list-group-item border-0 px-0 pt-0' key={alpha3Code}>
                                                    <Link to={'/' + alpha3Code}>
                                                            {alpha3Code}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    : <li className='list-group-item border-0 px-0 pt-0'>No bordering countries</li>
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CountryDetails;