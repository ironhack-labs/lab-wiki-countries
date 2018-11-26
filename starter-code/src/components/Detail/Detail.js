import React from 'react';
import {Link} from 'react-router-dom';

const Detail = ({id,countries}) =>{
    const country = countries.find(country => {return country.cca3 === id});
    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td >Capital</td>
                    <td>{country.capital[0]}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area} km
                        <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map((border,index) => {
                                const country = countries.find((country)=> {
                                    return country.cca3 === border
                                })
                                return <li key={index}> <Link to={`/countries/${border}`}> {country.name.common} </Link> </li>
                            })}
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
    ;

export default Detail;