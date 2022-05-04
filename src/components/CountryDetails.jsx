import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import CountriesList from "./CountriesList"
import axios from 'axios'


function CountryDetails({ countries, fetchingCList }) {

    const { country_code } = useParams()
    const [countryDetails, setCountryDetails] = useState({})
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fecthCountry()
    }, [country_code])                                                              // array vacío -> efecto de montaje

    const fecthCountry = () => {
        setFetching(true)
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${country_code}`)
            .then(({ data }) => {
                setCountryDetails(data)
                setFetching(false)
            })
            .catch(err => console.log(err))
    }

    return (

        <>

            <div className="col-5">
                {fetchingCList ? <h1>cargando</h1> :
                    <CountriesList countries={countries} />
                }
            </div>


            <div className="col-7">
                {fetching ? <h1>cargando</h1> :
                    <>
                        <img src={"https://flagpedia.net/data/flags/icon/72x54/" + countryDetails.alpha2Code?.toLowerCase() + ".png"} alt="" />
                        <h1>{countryDetails.name?.common}</h1>
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "30%" }}>Capital</td>
                                    <td>{countryDetails.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                        {countryDetails.area} km
                                        <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {countryDetails.borders?.map((border, idx) => <Link className="list-group-item list-group-item-action" key={idx} to={"/" + border}>{countries.filter(country => country.alpha3Code === border)[0]?.name.common}</Link>)}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
            </div>

        </>
    );
}

export default CountryDetails;