import { Link } from "react-router-dom"
import { useState, useEffect } from "react";


const CountriesList = ({ alpha3Code, countries }) => {

    const [allCountries, setCountries] = useState([])

    useEffect(() => {
        setCountries(countries);
    }, []);

    return (
        <div className="list-group">
            {allCountries.map((country) => {
                return(
                    <div >
                        {/* <img src={`https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`} /> */}
                        <h3>{country.name.common}</h3>
                        <Link to={`/${country.alpha3Code}`}>Ver detalles</Link>
                    </div>
                )
            })}
        </div>

    )


}
export default CountriesList
