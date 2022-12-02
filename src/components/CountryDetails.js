import React from 'react'
import { useParams } from "react-router-dom";
import countryDet from "./../countries.json"


function CountryDetails({countries}) {
    const { alpha3Code } = useParams()

    const foundCountry = countryDet.find((singleCountry) => {
        return singleCountry.alpha3Code === alpha3Code;
    });

/*     console.log(foundCountry) */



    return (
        <>
            <div className="col-7">
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    <p>{foundCountry.borders.length === 0 ? null : foundCountry.borders.map((element, i) => {
                                        console.log(element)
                                        const c = countryDet.find(country => country.alpha3Code === element);
                                        return (
                                            <>
{/*                                             <img
                            className="img-card-top"
                            alt =""
                             src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code}.png`} 
                        /> */}
                                            <li><a href={element}>{c.name.common}</a></li>
                                            </>
                                        
                                        )
                                    })}
                                    </p>



                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountryDetails