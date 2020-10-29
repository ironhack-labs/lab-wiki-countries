import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './CountryDetails.css'

const CountryDetails = (props) => {

    const [countryClicked, setCountryClicked] = useState({})

    const getCountryData = () => {
        let countryCCA3 = props.match.params.countryCCA3

        axios.get(`https://countries.tech-savvy.tech/countries`)
            .then((response) => {
                let singleCountry = response.data.filter((country) => {
                    return country.cca3 == countryCCA3
                })

                const {name, capital, area, borders} = singleCountry[0]

                 let countryClickedData = {
                    countryCCA3: countryCCA3,
                    name: name.common,
                    capital: capital[0],
                    area: area,
                    borders: borders
                }

                setCountryClicked(countryClickedData)
            })
    }

    useEffect(() => {
        getCountryData()
    }, [props.match.params.countryCCA3])

    useEffect(() => {
        if (countryClicked.countryCCA3 !== props.match.params.countryCCA3) {
            getCountryData()
        }
    })

    return (
        <div style={{textAlign: 'left'}}>
            <h1>{countryClicked.name}</h1>

            <hr />

            <h2>Capital</h2>
                <h3>{countryClicked.capital}</h3>

            <hr />

            <h2>Area</h2>
                <h3>{countryClicked.area} km²</h3>

            <hr />

            <h2>Borders</h2> 
                <ul>
                    {
                        countryClicked.borders && countryClicked.borders.map((borderCountry) => {
                            return <li><Link to={`/${borderCountry}`}>{borderCountry}</Link></li>
                            }
                        )
                    }
                </ul>
        </div>
    )
}

export default CountryDetails