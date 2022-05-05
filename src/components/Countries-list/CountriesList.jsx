import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
const CountriesList = ({ countriesData }) => {

    const [countriesList, setcountriesList] = useState([])



    return (

        <div className="col-6">

            {countriesData.map((country) => {
                return (
                    <div key={country.alpha3Code} className="country">
                        <picture><img src="https://flagpedia.net/data/flags/icon/72x54/fr.png"></img></picture>
                        <hr />
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </div>
                );
            })}
        </div>
    )

}

export default CountriesList