import countriesList from './../../countries.json'

export default function CountryDetails(props) {

    let selectedCountry = props.match.params.country
    let country = countriesList.find(country => country.cca3 === selectedCountry)

    const displayBorders = () => {

        return (
            country.borders.map((borderCountry, idx) => {
                const names = countriesList.find(elm => borderCountry === elm.cca3)
                return (
                    <li key={idx} ><a href={`/${borderCountry}`}>{names.name.common}</a></li>
                )
            })
        )
    }

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    displayBorders()
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
