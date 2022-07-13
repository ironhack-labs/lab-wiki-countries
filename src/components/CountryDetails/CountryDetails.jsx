import { useParams } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { id: countryId } = useParams()

    console.log('ESTOS SON NUESTROS PARAMS', countryId)

    const foundCountry = countries.find(elm => elm.alpha3Code === countryId)

    console.log('ESTAS SON SUS BORDERAS', foundCountry.borders)

    return (
        <div key={foundCountry.alpha3Code}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="" />
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{foundCountry.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {foundCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    foundCountry.borders.map(elm => {

                                        return (
                                            <li key={elm}>{elm}</li>
                                        )
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default CountryDetails