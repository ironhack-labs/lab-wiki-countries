import React from 'react';
import {Link} from 'react-router-dom'
import CountriesList from '../countries.json';

export const CountryDetails = ({location}) => {

    return(
        <div style={{width:'100%'}}>
            <h1>{location.state.name.official}</h1>
            <table className="table">
                <thead/>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{location.state.capital[0] === "" ? "N/A" : location.state.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{location.state.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    location.state.borders.length ? 
                                        location.state.borders.map((item,index_b) => {

                                            return(
                                                <li key={index_b}>
                                                    <Link
                                                        to={{
                                                            pathname: "/details",
                                                            state: CountriesList.find(item_c => item === item_c.cca3)
                                                        }}
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            )

                                        })
                                    :
                                        <li>N/A</li>
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
                </table>
        </div>
    )

};