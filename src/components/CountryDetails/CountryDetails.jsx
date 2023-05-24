import { Link, useParams } from "react-router-dom";


const CountryDetails = ({ Countries }) => {

    const { country_alpha3Code } = useParams()

    const selectedCountry = Countries.find(elm => elm.alpha3Code === country_alpha3Code)


    return (
        <div className="m-top-10">
            <h1>Detalles:</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} alt="img" />
            <hr />
            <p>Capital: {selectedCountry.capital}</p>
            <hr />
            <p>Area: {selectedCountry.area}</p>
            <hr />
            <ul>Borders:
                {
                    selectedCountry.borders.map((border) => {
                        const borderCountry = Countries.find(
                            (country) => country.alpha3Code === border
                        )
                        return (
                            < Link to={`/${borderCountry.alpha3Code}`} > {borderCountry.name.common}</Link >
                        )
                    })
                }
            </ul>

        </div>
    )

}
export default CountryDetails