import React from "react";


export default class CountryDetail extends React.Component {

    render() {
        return (
            <div className="col-sm-6">
                <h1>{this.props.name}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>{this.props.capital}</td>
                        </tr>

                        <tr>
                            <td>Area</td>
                            <td>{this.props.area} km
                        <sup>2</sup>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <ul>
                                    <li><a href="/AND">Andorra</a></li>
                                    <li><a href="/BEL">Belgium</a></li>
                                    <li><a href="/DEU">Germany</a></li>
                                    <li><a href="/ITA">Italy</a></li>
                                    <li><a href="/LUX">Luxembourg</a></li>
                                    <li><a href="/MCO">Monaco</a></li>
                                    <li><a href="/ESP">Spain</a></li>
                                    <li><a href="/CHE">Switzerland</a></li>
                                </ul>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}