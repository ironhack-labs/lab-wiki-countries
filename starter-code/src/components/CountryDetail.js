import React from 'react';
import '../App.css';
import countries from '../countries.json'
import { Link } from "react-router-dom";

function CountryDetail(props) {
    const countriesCopy = [...countries];
    const getCountry = (id) => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === id;
        }
        return countriesCopy.find(theCountry)
    };
    const { params } = props.match;
    const foundCountry = getCountry(params.id);
    return (
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                <td>Area</td>
                <td>{foundCountry.area} km
                    <sup>2</sup>
                </td>
                </tr>
                <tr>
                <td>Borders</td>
                <td>
                    <ul>
                    {foundCountry.borders.map((id, index) => {
                        return <li key={index}><Link to={id}>{getCountry(id).name.common}</Link></li>
                    })}
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default CountryDetail;