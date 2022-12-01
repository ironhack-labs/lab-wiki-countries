import { useParams } from "react-router-dom";

const CountryDetails = (props) => {
    const details = props.data
    const { id } = useParams()
    const selectCountry = details.find((country) => {
        return id === country.alpha3Code
    })
    console.log(selectCountry)

    return (
        <div>
            <h2>Country Code: {selectCountry.alpha3Code}</h2>
            <h3>Country Name:{selectCountry.name.common}</h3>
        </div>
    )
}

export default CountryDetails;