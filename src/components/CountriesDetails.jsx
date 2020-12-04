import React from 'react';
import { Link } from 'react-router-dom'


const CountryDetails = (props) => {
    const nation = props.countries.filter((country) => {
        return props.match.params.cca3 === country.cca3;
    });
    return (
        <div className="col-7">
            <h1>{nation[0].name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{nation[0].capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{nation[0].area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {nation[0].borders.map((singleCode) => {
                                    const countryObject = props.countries.filter((borderingCountry) => {
                                        return borderingCountry.cca3 === singleCode;
                                    }
                                    );
                                    return (<li><Link to={'/' + countryObject[0].cca3}>{countryObject[0].name.official}</Link>
                                    </li>)
                                })}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default CountryDetails;