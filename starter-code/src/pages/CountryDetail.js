import React from 'react';
import {Link} from 'react-router-dom';

function CountryDetail(props) {
    let countryLetters = props.match.params.cca3
    let selectedCountry = props.countries.filter((country) => {
        return (country.cca3 === countryLetters);
    })[0];

        return (
                <div className="col-7">
                    <h1 className='country-name'>{selectedCountry.name.common}</h1>
                    <table className='table'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{selectedCountry.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{selectedCountry.area} km<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>Border</td>
                                <td>
                                    <ul>
                                        {selectedCountry.borders.map((border) => {
                                            let borderCountry = props.countries.filter((country) => {
                                                return (country.cca3 === border);
                                            })[0]

                                            return (
                                                <li key={border}>
                                                    <Link to={`/${border}`}>
                                                        {borderCountry.name.common}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        )
};

export default CountryDetail;
