import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails ({data}) {

    const {countryParams} = useParams()
    let details = data.find(country => country.cca3 === countryParams )
    console.log("details", details)

    return (
        <div className="col-7">
            <h1> {details.name.official}<br></br><span>{details.flag}</span> </h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>Capital </td>
                        <td>Area</td>
                        <td>Borders</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {details.capital} </td>
                        <td> {details.area} </td>
                        <td>
                            <ul>
                                {
                                    details.borders.map((item)=>{
                                        return <Link to={item} ><li>{item}</li></Link>
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            

        </div>
    )
}

export default CountryDetails