import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import countries from '../../countries.json'

export default class CountriesList extends Component {
    render() {
        return (
            <div className="container-countriesList">

                <div className="col-md-3">
                    <table className="table">
                        <tbody>
                            {
                                countries.map((countries, idx) => {
                                    let url = `https://www.countryflags.io/${countries.cca2.toLowerCase()}/flat/64.png`
                                    return (
                                        <tr key={idx}>
                                            <td>
                                                <Link to="/details">
                                                    <img src={url} />
                                                    {countries.name.common}

                                                </Link>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
