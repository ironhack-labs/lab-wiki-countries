import React from "react";

const CountryDetails = ( {country} ) => {
    return (
        <div className="col-7">
            <h1>{country.name.official}</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => <li key={border}><a href={`/${border}`}>{border}</a></li>)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CountryDetails;