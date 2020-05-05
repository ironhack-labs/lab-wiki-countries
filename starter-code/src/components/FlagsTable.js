import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const FlagsTable = (props) => {
    let data = props.data;

    return (
        <div className="uk-overflow-auto uk-height-large uk-width-1-5 uk-margin-small-left flag-table">
            <table className="uk-table uk-table-divider">
                <tbody>
                    {data.map((country, index) => (
                        <tr key={index} className="table-row">
                            <td>
                                <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt="" />
                            </td>
                            <td className="uk-table-link uk-text-left">
                                <Link to={`/${country.cca3}`} className="row-text">{country.name.common}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FlagsTable;