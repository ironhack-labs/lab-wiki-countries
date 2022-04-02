import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';


const CountryDetails = () => {

    const [foundCountry, setFoundCountry] = useState(null)
    const [countryBorders, setCountryBorders] = useState([])

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`).then((response) => {
            setFoundCountry(response.data)
            setCountryBorders(response.data.borders)
        })
    }, [id])

    return (
        <>
            <div className="mt-4 col-5">

                {foundCountry &&
                    (
                        <div className='list-group-item'>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} />
                            <h1>{foundCountry.name.common}</h1>
                            <div className='d-flex justify-content-between mt-4'>
                                <h4>Capital</h4>
                                <h4 className='me-4'>{foundCountry.capital}</h4>
                            </div>

                            <hr></hr>

                            <div className='d-flex justify-content-between'>
                                <h4>Area</h4>
                                <h4 className='me-4'>{foundCountry.area}km</h4>
                            </div>

                            <hr></hr>

                            <div className='row align-items-start '>
                                <div className='col text-start'>
                                    <h4>Borders: </h4>
                                </div>

                                <div className='col text-end me-4'>
                                    {countryBorders.map((border) => {
                                        return <Link key={border} className="border-link" to={`/${border}`}>
                                            <p>{border}</p>
                                        </Link>
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    );
};

export default CountryDetails;