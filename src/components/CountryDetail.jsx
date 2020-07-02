import React from 'react';
import Countries from './../countries.json';
import { Link } from 'react-router-dom';
import './CountryDetail.css';

function CountryDetail (props){
    let matchedCountry = Countries.find((country) => {
        return country.cca3 === props.match.params.id
    })

    return (
        <table className="table">
           <thead className="country-name">{matchedCountry.name.common}</thead>
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{matchedCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{matchedCountry.area} km<sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {
                                matchedCountry.borders.map((border, index)=> {
                                    return <li><Link to={`/country/${border}`} key={`${index}-${border}`}>{border}</Link></li>
                                })
                            }
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CountryDetail