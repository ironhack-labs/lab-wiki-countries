import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useParams} from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

import countriesData from '../src/countries.json';

function CountryDetails(props){
        const countryCode = props.match.params.countryCode;;

        function findCountry(code){
            return countriesData.filter((country) => country.cca3 === code);
        }

        let countryFound = findCountry(countryCode);

        const [country, setCountry] = useState(countryFound[0]);
        useEffect(() => {setCountry(countryFound[0])}, [countryFound]);

        return (
            <div className="col-9 m-0 p-5">
                <h1> {country.flag} {country.name.common} </h1>
                <table class="table">
                    <thead> </thead>
                    <tbody>
                        <tr>
                            <td> Capital </td>
                            <td> {country.capital} </td>
                        </tr>
                        <tr>
                            <td> Area </td>
                            <td> {`${country.area} km`} 
                            <sup> </sup>
                            </td>
                        </tr>
                        <tr>
                            <td> Borders </td>
                            <td>
                                <ul> 
                                    {(country.borders.lenght === 0) && <li><i> No borders </i></li>}
                                    {country.borders.map((el) => {
                                        return (
                                            <li custom={findCountry(el)[0].flag}><Link to={`/details/${el}`}>{findCountry(el)[0].name.common}</Link></li>
                                        )
                                    })}
                                    </ul>
                              </td>
                         </tr>
                        </tbody>
                    </table>
                </div>
        )
}

export default CountryDetails

