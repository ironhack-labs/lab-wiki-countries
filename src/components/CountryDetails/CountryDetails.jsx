import { useParams } from "react-router-dom"

function CountryDetails({ countriesData }) {

    const { countryId } = useParams()

    const foundCountry = countriesData.find((oneCountry) => {
        return oneCountry.alpha3Code === countryId;



        return (
            <div class="col-7">


                <h1>{countriesData.name.official}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style="width: 30%"></td>
                            <td>{countriesData.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countriesData.area}
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>{countriesData.borders}</td>
                            <td>
                                <ul>
                                    <Link to="/AND">Andorra</Link>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div >
        )

    }
    )
}




export default CountryDetails