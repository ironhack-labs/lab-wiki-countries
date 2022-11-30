import { useEffect, useState } from "react"
import CountriesJson from "./../countries.json"
import { Link } from "react-router-dom"

function Countries() {

    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        setCountriesList(CountriesJson)
    }, [])


    return (
        <div>
            {countriesList.map(elm => {
                return (
                    <div key={elm.alpha3Code}>
                        {/* <img class="flag" src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                            alt="country flag" /> */}
                        <Link to={`/countries/${elm.alpha3Code}`} className="list">{elm.name.official}</Link>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Countries
