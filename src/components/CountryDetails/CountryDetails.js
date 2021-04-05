import React from 'react';
import { Link } from "react-router-dom";


const CountryDetails = (props) => {
    console.log("Prueba 1" ,props.match.params.id)

    const paramsId = props.match.params.id;
     

    const foundCountry = props.countries.find((elm) => elm.cca3 === paramsId);

    const frontiers = foundCountry.borders



    return (
        <div className="details">
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
                                    {frontiers.map(borders => {
                                        const nameBorder = props.countries.find((country) => country.cca3 === borders);
                                        return (


                                            <li key={borders}>
                                                <Link to={`/${borders}`}>{nameBorder.name.common}</Link>
                                            </li>
                                        );
                                    }
                                    )
                                    }
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