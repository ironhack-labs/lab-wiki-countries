import { useParams } from "react-router-dom"

const CountryDetails = ({ countriesData }) => {

    const { country_id } = useParams()

    const details = countriesData.find(detail => {
        return detail.alpha3Code === country_id
    })



    return (
        <div className="col-6">
            <h1>{details.name.common}</h1>
            <p>Area: {details.area} km2</p>
            <ul>
                <li>
                    <div>

                    </div>
                </li>
            </ul>

        </div>
    )

}

export default CountryDetails