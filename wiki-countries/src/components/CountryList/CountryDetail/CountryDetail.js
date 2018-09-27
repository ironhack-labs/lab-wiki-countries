import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetail.css';

const countryDetail = ({ country, select }) => {

    return (
        <div>
            <h1 >{ country ? country.name.common : null }</h1>
            <table className="detail-table">
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{ country ? country.capital : null }</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{ country ? country.area : null } km<sup><small>2</small></sup></td>
                    </tr>
                    <tr>
                        <td className="borders"><span>Border</span></td>
                        <td>
                            <ul>
                                { country ? country.borders ? (
                            country.borders.map((b, id) => (
                                <li key={b + id}><Link to={`/countries/:${b[0]}`} onClick={() => select(b[0])}>{ b[1] }</Link></li>
                            ))
                        ): (
                            <p>No borders to show.</p>
                                ): null}
                        </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default countryDetail;