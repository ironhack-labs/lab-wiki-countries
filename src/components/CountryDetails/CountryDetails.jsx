import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countriesData }) => {

    const { country_id } = useParams()

    const foundCountry = countriesData.find(elm => elm.alpha3Code === country_id)

    console.log(foundCountry)
    const border = foundCountry.borders
    return (
        <>
            <h1>Detalles</h1>
            <p>Detalles del pais {foundCountry.name.common}</p>
            <p>Área del país {foundCountry.area} km</p>
            <h1>Frontera</h1>
            <ul>
                {border.map(EachBorder => {
                    return (
                        <li>{EachBorder}</li>
                    )
                })}
            </ul>

        </>
    )
}


export default CountryDetails