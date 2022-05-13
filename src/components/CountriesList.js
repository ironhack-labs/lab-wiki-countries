import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import countriesArr from "../countries.json";


function CountriesList({ countries }) {
    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        setCountriesList(countries.reverse())
    }, [countries])

    return (
        <div className="list-group">
            {countriesList.map((country) => {
                return (

                    <div key={country.alpha3Code} className="list-group-item list-group-item-action">
                        <img style={{ maxHeight: "5vh", objectFit: 'contain' }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
                        <br></br>
                        <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
                    </div>
                )
            })}
        </div>
    )
}


export default CountriesList