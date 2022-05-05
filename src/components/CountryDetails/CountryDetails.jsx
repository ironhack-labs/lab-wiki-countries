import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const axios = require('axios').default


const CountryDetails = ({ countries }) => {

    const [selectedCountry, setSelectedCountry] = useState([])
    const { id } = useParams()

    let oneCountry = []

    useEffect(() => {

        axios
            .get(` https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then((response) => {
                oneCountry.push(response.data)
                setSelectedCountry([...oneCountry])
            })
            .catch(err => console.log(err))

    }, [id])


    const findCountry = (id) => {
        const foundCountry = countries.find(elm => elm.alpha3Code === id)
        return foundCountry.name.common
    }


    return (
        <div>
            <div id="contenido"></div>


            {selectedCountry.map(elem => {
                return (

                    <div>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt="" />
                        <h2>{elem.name.common}</h2>
                        <div>
                            <h6>Capital</h6>
                            <h6>{elem.capital[0]}</h6>
                            <hr />
                        </div>
                        <div>
                            <h6>Area</h6>
                            <h6>{elem.area}</h6>
                            <hr />
                        </div>
                        <div>
                            <h6>Borders</h6>
                            <ul>
                                {elem.borders.map(e => {
                                    return (
                                        <div>
                                            <Link to={`/${e}`}>
                                                <li>{findCountry(e)}</li>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </ul>
                            <hr />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountryDetails