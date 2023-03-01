import './CountryDetails.css'
import { Link } from "react-router-dom";
import { useParams, useEffect } from "react-router-dom"
import axios from 'axios';

function CountryDetails({ countries }) {

    const { id } = useParams()

    const country = countries.find((elm) => elm.alpha3Code === id)

    const { name, capital, area, borders } = country

    return (
        <div className='countryDetails'>
            <h1>Country Details</h1>
            <hr />
            <article>
                <h2>{name.common}</h2>
                <hr />
                <p> <strong>Capital</strong> {capital}</p>
                <p> <strong>Area</strong> {area}</p>
                <p> <strong>Borders: </strong></p>
                <ul>
                    {
                        borders.map((elm, idx) => {
                            const link = `/${elm}`
                            return <li key={idx}><Link to={link} >{elm}</Link> </li>
                        })
                    }

                </ul>

            </article>

        </div >
    );
}

export default CountryDetails;