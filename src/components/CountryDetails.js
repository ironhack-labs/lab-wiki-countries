import axios from 'axios';
import { useEffect, useStat } from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";


function CountryDetails(props) {
    /*   const { characterId } = useParams();
     */

    props.countries.map((countries) => {
        return (
            <div class="col-7">
                <h1>{{ countries.name }}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style="width: 30%">Capital</td>
                            <td>Paris</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                551695 km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    <li><a href="/AND">{{ countries.name }}</a></li>
                                    <li><a href="/BEL">{{ countries.name }}</a></li>
                                    <li><a href="/DEU">{{ countries.name }}</a></li>
                                    <li><a href="/ITA">{{ countries.name }}</a></li>
                                    <li><a href="/LUX">{{ countries.name }}</a></li>
                                    <li><a href="/MCO">{{ countries.name }}</a></li>
                                    <li><a href="/ESP">{{ countries.name }}</a></li>
                                    <li><a href="/CHE">{{ countries.name }}</a></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    })

    export default CountryDetails;
