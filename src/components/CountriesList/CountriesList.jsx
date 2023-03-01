import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Countries = ({ countriesList }) => {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(countriesList)
    }, [])

    return (
        <div className="countries-List">
            {list.map((country, i) => {
                const flag = country.alpha2Code.toLowerCase()

                return (
                    <div key={country._id} className="each-country">
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png`} alt="flag" />
                        </div>
                        <Link to={`/${country.alpha3Code}`} >{country.name.official}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Countries