import React, { Component } from 'react';
import countries from '../countries.json';
import CountryDetailCard from './CountryDetailCard';

class CountryDetail extends Component {
    render() {
        const country = countries.find(c=>c.cca3===this.props.match.params.id);

        return (
            <div className='col-7'>
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital}</td>
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
                                {country.borders.map(id=><CountryDetailCard key={id} id={id}/>)}
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CountryDetail;