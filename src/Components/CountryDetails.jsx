import React, { Component } from "react";
import countries from "../countries.json";

class CountryDetails extends Component {
   state= {

   }
    render() {


        const country  = countries.filter(c => c.cca3 == this.props.match.params.cca3)[0]

        return (
            <div class="col-7">
                <div>
                    <h1>{country.name.official}</h1>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ 'width': '30%' }}>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area}
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>{country.borders}</td>
                                <td>
                                    <ul>
                                        <li><a href={country.cca3}>{country.name.common}</a></li>

                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default CountryDetails;