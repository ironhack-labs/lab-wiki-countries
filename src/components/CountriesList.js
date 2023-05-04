import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function CountriesList(props) {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(props.countries)
    }, [props.countries])

    return (
        <div>
            {countries.map((country => {
                return(
                 <Link to={`/country/${country.alpha3Code}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                    <p>{country.name.common}</p>
                 </Link>
            )
        }))
            }
            
        </div>
    )
}

export default CountriesList