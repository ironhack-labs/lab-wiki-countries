import React, {useEffect, useState} from "react";

import {Link, useParams} from 'react-router-dom';
import {countryDetail} from '../services/countriesService/CountriesService';
import './CountryDetail.css';

const CountryDetail = () => {
    const {name} = useParams();
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState({});
    const [borders, SetBorders] = useState([]);

    useEffect(() => {
        countryDetail(name)
            .then(countryFound => {
                setCountry(countryFound)
                getBorders(countryFound.borders)
            })
    }, [name])

    const getBorders = (borders) => {
        Promise.all(
            borders.map(border => {
                return countryDetail(border)
            })
        )
        .then(countries => {
            const newBorders = countries.map(country => {
                return country;
            })
            SetBorders(newBorders)
            setLoading(false)
        })
    }

    return(
        <div className="w-25">
            {loading ? <p>Loading...</p> :
            <>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
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
                        {console.log(borders)}
                            {borders.map(border => {
                                return(
                                    <Link 
                                        className="listing" 
                                        key={border._id} 
                                        to={`/countries/${border.alpha3Code}`}
                                    >
                                        <li>{border.name?.common}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
              </tbody>
            </table>
            </> 
            }
          </div>
    )
}

export default CountryDetail; 