import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function ContriesDetails({ countries }) {

    const { countryId } = useParams();


    const country = countries.find(country => country.alpha3Code === countryId);


    function borderCountry(border) {
        return countries.find(country => country.alpha3Code === border).alpha3Code
    }


    // console.log(countryToBeFind);
    // console.log(country)

    return (
        <div className="col-7">

            <h1>{country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {countries.filter(country => country.borders.includes(countryId))
                                    .map(borders => {
                                        return (
                                            <li>
                                                <Link to={`/${borders.alpha3Code}`}>
                                                    <div className="list-group-item border-0">{borders.name.common}</div>
                                                </Link>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >)
}


