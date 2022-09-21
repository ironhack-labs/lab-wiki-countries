import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const DetailCountry = ({ country, countries }) => {
    console.log(country)
    const [borderCountries, setBorderCountries] = useState([])

    useEffect(() => {
        const newBorders = countries.filter((el) => country?.borders?.includes(el.alpha3Code))
        setBorderCountries(newBorders)

    }, [country])


    return (
        <>
            {/* <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code?.toLowerCase()}.png`} alt="" /> */}
            <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code?.toLowerCase()}.webp`} className="w-25 " />
            <h1>{country?.name?.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td /* style="width: 30%" */ >Capital</td>
                        <td>{country?.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country?.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    {borderCountries.length !== 0 ? <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borderCountries?.map((countryBorder) => {
                                    return <li key={countryBorder.alpha2Code}><Link to={`/${countryBorder?.alpha3Code}`}>{countryBorder?.name?.common}</Link></li>
                                })}
                            </ul>
                        </td>
                    </tr> : null}

                </tbody>
            </table>
        </>
    )
}

export default DetailCountry