import React from 'react';
import data from '../../../countries.json'


const axios = require('axios');

class CountriesDetails extends React.Component{


    state = {
        countries: [...data],
        countryFromApi: [],
        latitude: 0,
        longitude: 0,
        apiDataRetrieved: false
    }

    componentDidMount() {
        let country = this.state.countries.filter(country => country.cca3 === this.props.match.params.code);
    
    }
    render() {
        let country = this.state.countries.filter(country => country.cca3 === this.props.match.params.code);
  

        return (
            <div className="col-7">
                <h1>{country[0].name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody className="leftText">
                    <tr>
                    <td className="CapitalTd">Capital</td>
                    <td>{country[0].capital[0]}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {country[0].area.toLocaleString('ES')} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        { country[0].borders.length === 0 ? "No borders" : country[0].borders.map(border => {
                            let name = this.state.countries.filter(country => country.cca3 === border)
                            return <li key={border}><a href={border}>{name[0].name.common}</a></li>
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>

            </div>
        )
    }
}


export default CountriesDetails;




