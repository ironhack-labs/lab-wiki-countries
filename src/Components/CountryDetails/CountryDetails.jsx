import './CountryDetails.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import CountriesList from "./../CountriesList/CountriesList"
import axios from 'axios'


function CountryDetails({ countries }) {

    const { id } = useParams()
    const [countryDetails, setCountryDetails] = useState({})

    useEffect(() => {
        fecthCountry()
    }, [id])

    const fecthCountry = () => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then(({ data }) => {
                setCountryDetails(data)
            })
            .catch(err => console.log(err))
    }

    return (

        <>

            <div className="col-5">
                {
                    <CountriesList countries={countries} />
                }
            </div>


            <div className="col-7">
                {
                    <>
                        <img src={"https://flagpedia.net/data/flags/icon/72x54/" + countryDetails.alpha2Code?.toLowerCase() + ".png"} alt="" />
                        <h1>{countryDetails.name?.official}</h1>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Capital</td>
                                    <td>{countryDetails.capital}</td>
                                </tr>
                                <tr>
                                    <td>Extensión</td>
                                    <td>
                                        {countryDetails.area}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {countryDetails.borders?.map((border, idx) => <li><Link key={idx} to={"/" + border}>{countries.filter(country => country.alpha3Code === border)[0].name?.official}</Link></li>)}
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

export default CountryDetails