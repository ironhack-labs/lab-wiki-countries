import React, { Component } from 'react';


import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const country = this.props.country;
        const borders = this.props.country.borders;

        return(
            <div>
                <h1>{country.name.official}</h1>
                <Table>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul className='country-list'>
                            {borders.flat().map(borders =>(
                                <li><Link to={`/${borders.country.cca3}`}>{borders.country.name.common}</Link></li>
                            ))
                            }
                            </ul>
                        </td>
                    </tr>
                </Table>
            </div>
        )
    }
}

export default CountryDetail;