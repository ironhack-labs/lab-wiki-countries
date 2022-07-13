import { useState } from "react"
import { Link, useParams } from "react-router-dom"


const CountryDetails = ({ countriesJSON }) => {

    const [oneCountry, setCountry] = useState(countriesJSON)

    const { countryCode } = useParams()

    const infoCountry = countriesJSON?.find(ele => ele.alpha3Code === countryCode)


    return (
        <div class="col-md-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${infoCountry.alpha2Code.toLowerCase()}.png`} alt="" />
            <h1>{infoCountry?.name.common}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{infoCountry?.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {infoCountry?.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>

                                {infoCountry?.borders.map(ele => {
                                    return (
                                        <Link to="">
                                            <li>{ele}</li>
                                        </Link>
                                    )
                                })}



                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails