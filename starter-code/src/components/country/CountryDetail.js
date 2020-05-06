import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CountryDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <>
                <h1>{this.props.country.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{this.props.country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{this.props.country.area} km
                    <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {this.props.country.borders.map((elm, index) => <li key={index}><Link to={`/${elm}`} onClick={() => this.props.findCountry(elm)} key={index}>{this.props.getCountryName(elm)}</Link></li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

}

export default CountryDetail