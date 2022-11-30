import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import countriesData from '../../countries.json'
import './CountriesList.css'

const CountriesList = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countriesData => {
                const sortedByName = [...countriesData]
                sortedByName.sort((a, b) => {
                    return a.name.common.localeCompare(b.name.common)
                });
                setCountries(sortedByName)
            })
    }, [])


    return (
        <section className="CountriesList" style={{ "maxHeight": "90vh", "overflow": "scroll" }}>
            <div></div>
            <table className="table">
                <thead>
                    <tr>
                        <th colspan="2">Countries List</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(elem => {
                        return <tr key={elem.alpha3Code}>
                            <td>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt="country flag" />
                                <Link to={`/countries/${elem.alpha3Code}`}>{elem.name.common}</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </section>
    )
}

export default CountriesList