import React from 'react';
import { Link } from 'react-router-dom';

// const CountryDetails = ({ countries, match }) => {
const CountryDetails = ({ match, countries }) => {

    const getCountry = (cca3) => {
        const country = countries.find(countryItem => countryItem.cca3 === cca3)

        return {
            name: country.name.common,
            capital: country.capital,
            area: country.area,
            borders: country.borders,
            flag: country.flag,
        }
    }

    const thisCountry = getCountry(match.params.cca3);

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
                            {thisCountry.capital[0]}
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
                                        thisCountry.borders.map(cca3 => {
                                            const borderCountry = getCountry(cca3);
                                            return(
                                                <li className='list-group-item border-0 px-0 pt-0' key={cca3}>
                                                    <Link to={'/' + cca3}>
                                                            {borderCountry.name}
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