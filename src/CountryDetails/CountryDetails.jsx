import { Link, useParams } from "react-router-dom";
const CountryDetails = ({ Countries }) => {
    const { alpha3Code } = useParams()
    const currentCountry = Countries.find(elm => elm.alpha3Code === alpha3Code)


    return (
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`} alt="" />

            <h2>{currentCountry.name.official} (Capital: {currentCountry.capital})</h2>
            <hr />
            <p>Area: {currentCountry.area}</p>
            <p>Borders:
                <ul>
                    {
                        currentCountry.borders.map((border) => {
                            return (<li><a href={`/${border}`}>{border}</a></li>)
                        })
                    }
                </ul>
            </p>
            <hr />
            <Link to="/">Back</Link>
        </div>
    )
}
export default CountryDetails