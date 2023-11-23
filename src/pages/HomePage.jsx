import axios  from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const baseUrl = 'https://ih-countries-api.herokuapp.com/countries'

function HomePage() {

    const [countries, setCountry] = useState([])

    useEffect(() => {
        axios
        .get(baseUrl)
        .then((response) => {setCountry(response.data)})
        .catch(err => console.log('err',err))
    })

    if(!countries) return null

    return(
        <div className="container" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <h1 style={{fontSize: '24px'}}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
            {
                countries.map((country) => {
                    return (
                        <div className="list-group-item list-group-item-action" key={country._id}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>  
    )
}

export default HomePage;
