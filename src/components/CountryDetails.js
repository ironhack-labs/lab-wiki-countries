import { NavLink, useParams } from "react-router-dom"

const CountryDetails = ((props) => {

    const { countryId } = useParams()

    const displayableCountry = props.countries.filter((country) => {
        if (country.alpha3Code === countryId) {
            return true
        } else {
            return false
        }
    })

    let displayedCountry = displayableCountry.shift()


    let getCountryName = (country) => {
        let rightCountryArray = props.countries.filter((allCountries) => {
            if (allCountries.alpha3Code === country) {
                return true
            } else {
                return false
            }
        })
        let singleCountry = rightCountryArray.shift()
        return singleCountry.name.official
    }



    return (<div className="col-6">
        <h1>{displayedCountry.name.official}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{displayedCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {displayedCountry.area}
                        <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {displayedCountry.borders.map((country) => {
                                return <li key={country.alpha3Code}><a href={`/${country}`}>{getCountryName(country)}</a></li>
                            })}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>)
})

export default CountryDetails