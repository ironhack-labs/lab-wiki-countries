import React, { Component } from 'react'
import data from '../countries.json'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const axios = require('axios');

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={1}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
  </GoogleMap>
))

export default class CountriesDetails extends Component {

    state = {
        countries: [...data],
        countryFromApi: [],
        latitude: 0,
        longitude: 0,
        apiDataRetrieved: false
    }

    componentDidMount() {
        let country = this.state.countries.filter(country => country.cca3 === this.props.match.params.code);
        this.getCoordinates(country)
    }

    getCoordinates(country) {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${country[0].cca3}`)
        .then((r) => {
            this.setState({ countryFromApi: r.data, latitude: Number(r.data.latlng[0]), longitude: Number(r.data.latlng[1]), apiDataRetrieved: true  });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        let country = this.state.countries.filter(country => country.cca3 === this.props.match.params.code);
        this.getCoordinates(country);

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
                { this.state.apiDataRetrieved ? <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    /> : "Loading map..." }
                
            </div>
        )
    }
}







