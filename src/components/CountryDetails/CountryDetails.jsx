import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import Axios from 'axios';

function CountryDetail({ countries }) {

    const { country_Id } = useParams()


    const [Allcountries, setAllcountries] = useState([])


    useEffect(() => {
        Axios.get(`https://ih-countries-api.herokuapp.com/countries/`)
            .then(data => {
                setAllcountries(data.data)

            })
    }, [])

    // const foundCountry = Allcountries.find(elm => elm.alpha3Code === country_Id)
    const foundCountry = countries.find(elm => elm.alpha3Code === country_Id)




    return (
        <>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />

            <h1>Name: {foundCountry.name.official}</h1>
            <p>Capital:{foundCountry.capital}</p>
            <p>Area:{foundCountry.area}</p>
            <p>Borders:{foundCountry.borders}</p>
            {/* {
                foundCountry.borders.map(({ border, alpha3Code }) => {
                    return (
                        <div key={alpha3Code}>
                            <p>{countries.find(elm => elm.alpha3Code === border)} </p>
                        </div>
                    )

                })
            } */}

            <hr />
            {/* <p>Hace uso de las tecnologías: {foundProject.technologies}</p>
            <hr />
            <Link to="/">Volver al incio</Link> */}

        </>

    );
}

export default CountryDetail