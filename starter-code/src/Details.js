import React from "react";
import { Link } from 'react-router-dom';

const Details = (props) => {
    const { name, capital, area,  borders } = props;
    return (
        <div className="col-7">
            <h1>{name}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{area} km
                <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.map(border => {

                                   return(
                                   <li><Link to={border}>{border}</Link></li>
                                   )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Details;
