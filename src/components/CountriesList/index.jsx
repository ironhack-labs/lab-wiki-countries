import './CountriesList.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'


const CountriesList = () => {

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries`)
            .then(response => response.json())
            .then(data => {
                setCountryData(data)
            })
    }, [])

    const [countryData, setCountryData] = useState()


    const countriesListNamesTags = countryData?.map(country =>
        <ListGroup.Item key={country.alpha3Code} action >
            <Link to={`/${country.alpha3Code}`}>
                <div className="ListItem">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common + "flag icon"} />
                    <p>{country.name.common}</p>
                </div>
            </Link>
        </ListGroup.Item>)

    return (
        <ListGroup style={{ "maxHeight": " 90vh", "overflowY": "scroll" }} className="CountryList">
            {countriesListNamesTags}
        </ListGroup>
    )
}

export default CountriesList