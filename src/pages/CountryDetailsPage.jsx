import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function CountryDetails() {
    const { countryId } = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => setCountry(response.data))
            .catch(err => console.log(err))
    }, [countryId])
    return (
        (!country) ?
            <div>
                <p className="m-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
                <h2>Loading...</h2>
            </div>
        :
            <div className="container">
                <p className="m-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} className="m-4" alt="Country" />
                <h1 className="m-4">{ country.name.common }</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{ country.capital[0] }</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            { country.area } km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            { country.borders.map((borderCountry, i) => {
                                return (
                                    <Link className="list-group-item list-group-item-action text-primary" to={`/${ borderCountry }`} key={ i }>
                                        { borderCountry }
                                    </Link>
                                )
                            }) }
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
    )
}

export default CountryDetails
