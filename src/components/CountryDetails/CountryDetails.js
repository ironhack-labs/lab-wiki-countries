import React from 'react'
import { Link, useParams } from "react-router-dom"


const CountryDetails = (props) => {
    console.log('Props de RouterDom' ,props)

    const params = props.match.params;
    console.log("hola",params)

    const foundCountry = props.countries.find((elm) => elm.cca3 === params.cca3)
    console.log("adios", foundCountry) // resultado undefined revisar


    return (
        <div className="details">
            <div className="col-7">
                <h1>{foundCountry[0].name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{foundCountry[0].capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                            {foundCountry[0].area} km 
          <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {foundCountry[0].borders.map(borders => <li><Link to= {`/${borders}`}>{borders}</Link></li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CountryDetails