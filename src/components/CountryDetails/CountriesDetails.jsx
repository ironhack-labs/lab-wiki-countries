import { Link, useParams } from "react-router-dom"
import Countries from "../../countries.json"
import { useEffect, useState } from "react"


const CountryDetails = ({ countrys }) => {
    const { id } = useParams()
    console.log(countrys)
    const country = countrys.find(elm => elm.alpha3Code == id)
    return (
        <div className="col-md-6">
            <h1>{country.name.common}</h1>
            <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                style={{ width: '200px', height: '150px', marginBottom: '20px' }}
            />
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul style={{ listStyle: "none" }}>
                                {country.borders.map((border) => (
                                    <li key={border}>
                                        <Link to={`/${border}`}>{border}</Link>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CountryDetails