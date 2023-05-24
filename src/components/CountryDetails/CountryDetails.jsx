import { Link, useParams } from "react-router-dom"

import axios from 'axios';

import { useEffect, useState } from 'react';


const CountryDetails = ({ countries }) => {

    const { id } = useParams()

    const country = countries.find(country => country.alpha3Code === id)

    // const [country, setCountry] = useState();

    // useEffect(() => {
    //     fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    //         .then(response => response.json())
    //         // .then(response => response.json())
    //         .then(data => setCountry(data))
    //         .catch(error => console.log(error));
    // }, [])

    // useEffect(() => {
    //     axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    //         // .then(response => setCountry(response.data))
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error));
    // }, [])


    return (

        <>
            <h1> {country.name.common} </h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {country.borders.map(elm => <Link to={`/${elm}`}> <p key={elm}>{elm}</p> </Link>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}


export default CountryDetails