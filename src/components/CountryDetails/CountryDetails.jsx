import { useParams, Link } from "react-router-dom"
import './CountryDetails.css'


const CountryDetails = ({ countries }) => {

    const { id } = useParams()

    const countryArray = countries.filter(elm => elm.alpha3Code == id)
    const country = countryArray[0]

    const flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`


    return (
        <>
            <h1>{country.name.common}</h1>
            <table className="table CountryDetails" >
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Bandera</td>
                        <td><img src={flag.toLowerCase()} alt={country.alpha2Code} /></td>
                    </tr>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    country.borders.map(border => {
                                        return <li key={country.alpha3Code}>
                                            <Link to={`/${country.alpha3Code}`}> {border} </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table >
        </>
    )
}

export default CountryDetails