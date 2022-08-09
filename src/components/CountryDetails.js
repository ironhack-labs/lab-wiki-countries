import { useParams } from 'react-router-dom'

function CountryDetails (prop) {

    const {countryCode} = useParams();
    console.log ('countryCode: ', countryCode)

    const foundCountry = prop.countriesProp.find((oneCountry)=> {
        return oneCountry.alpha3Code === countryCode;
    })

    return (
        <div>
            <h3>Country details</h3>
            {!foundCountry && <h4>Country not found!</h4>}
            {foundCountry && (
                <div>
                    <h3>{foundCountry.name.common}</h3>
                    <h4>{foundCountry.capital}</h4>
                    <h4>{foundCountry.borders}</h4>
                </div>
            )}

        </div>
    )
}
export default CountryDetails