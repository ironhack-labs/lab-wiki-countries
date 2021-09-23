import React from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom'


function CountryDetails(props) {
    const { cca3 } = props.match.params

    const found = countries.find((country) => country.cca3 === cca3)


    return (
        <div className="container mt-5 ">
            <h1>{found.name.common}</h1>
            <div className="row border">
                <div className="col-md-6">
                    <p>Capital</p>
                </div>
                <div className="col-md-6">
                    <p>{found.capital}</p>
                </div>
                <div className="col-md-6">
                    <p>Area</p>
                </div>
                <div className="col-md-6">
                    <p>{found.area}</p>
                </div>
                <div className="col-md-6">
                    <p>Borders</p>
                </div>
                <div className="col-md-6">
                    <ul className="list-group">{found.borders.map((elm, idx) => {
                        return (
                            <li className="list-group-item ">
                                <Link className="text-decoration-none text-dark" key={`${idx}-${elm}`} to={`/${elm}`}>
                                    {countries.find((country) => country.cca3 === elm).name.common}
                                </Link>
                            </li>
                        )
                    })}</ul>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails
