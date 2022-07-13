import './CountryDetails.css'
import { useEffect, useState } from 'react';

import { Link, useParams } from "react-router-dom"

import Table from 'react-bootstrap/Table';

const CountryDetails = () => {
    const { countryID } = useParams()
    const [countryData, setCountryData] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true);
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryID}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCountryData(data)
                setIsLoading(false)
            })
    }, [countryID]);


    if (isLoading) {
        return (<h1>Is loading...</h1>)
    } else {
        return (
            <>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryData?.alpha2Code?.toLowerCase()}.png`}></img>
                <h1>{countryData?.name.common}</h1>
                <Table >
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{countryData?.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countryData?.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryData?.borders.map(border => {
                                        return <li key={"key_" + border} ><Link to={`/${border}`}>{border}</Link ></li>
                                    })}

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default CountryDetails