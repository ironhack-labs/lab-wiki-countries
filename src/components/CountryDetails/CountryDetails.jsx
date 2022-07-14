import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const axios = require('axios').default


function CountryDetails({ countriesData }) {

    //const [selectCountry, setSelectCountry] = useState([])
    const { country_id } = useParams()

    // let selectedCountry = []

    // useEffect(() => {

    //     axios
    //         .get('https://ih-countries-api.herokuapp.com/countries/$country_id')
    //         .then((response) => {
    //             selectedCountry(response.data)
    //             setSelectCountry([...selectCountry])
    //         })
    //         .catch(err => console.log(err))
    // }), [country_id]

    const foundCountry = countriesData.find(elm => elm.alpha3Code === country_id)

    return (
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} />
            <h2>{foundCountry.name.common}</h2>
            <p>{foundCountry.capital}</p>
            <p>{foundCountry.area}</p>
            <p>{foundCountry.borders}</p>
        </div>
    )

}

export default CountryDetails