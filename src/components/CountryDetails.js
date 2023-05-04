import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import countriesFromDB from '../countries.json'

function CountryDetails(props) {
    const [foundCountry, setFoundCountry] = useState(null)

    const { alpha3Code } = useParams()

    useEffect(() => {
        const country = props.countries.find(countryObj => {
            return countryObj.alpha3Code === alpha3Code
        })

        if (country) {
            setFoundCountry(country)
        }
    }, [alpha3Code])

    return (
        <div className="col-7">
        {!foundCountry && <h3>Project not found!</h3>}

        {foundCountry && (
            <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="Flag" height="75px" /><br /><br />
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td className="text-start" style={{width: "30%"}}>Capital</td>
                    <td className="text-start">{foundCountry.capital}</td>
                    </tr>
                    <tr>
                    <td className="text-start">Area</td>
                    <td className="text-start">
                        {foundCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td className="text-start">Borders</td>
                    <td>
                        <ul className="list-group">
                        {foundCountry.borders.map(borderingCountryCode => {
                            const borderingCountry = countriesFromDB.find(country => {
                                return (
                                    country.alpha3Code === borderingCountryCode 
                                )
                            })
                            return (
                                <div key={borderingCountry.alpha3Code}>
                                    <Link to={`/country/${borderingCountry.alpha3Code}`}><li className="text-start list-unstyled">{borderingCountry.name.common}</li></Link>
                                </div>
                            )
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )}
      </div>
    )
}

export default CountryDetails