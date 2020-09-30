import React from 'react'
import { Link } from 'react-router-dom'
import Countries from '../countries.json'
import Map from './Map'

export default class CountryDetail extends React.Component {

    state = {
        lat: 0,
        lng: 0
    }


    render() {
        const countryParam = Countries.find(country => country.cca3 === this.props.match.params.countryCode)
        const countryBorder = countryParam.borders

        return (
            <div>
                <h2 onChange={this.Update}>{countryParam.flag} {countryParam.translations['spa'].official}</h2>
                <hr />
                <div className="row">
                    <div className="col-6 font-weight-bold">Capital</div>
                    <div className="col-6">{countryParam.capital}</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6 font-weight-bold">Area</div>
                    <div className="col-6">{countryParam.area}</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6 font-weight-bold">Fronteras</div>
                    <div className="col-6">
                        <ul>
                            {countryBorder.map(border => {
                                return (
                                    <Link key={border} to={border}>
                                        <li>{Countries.find(country => country.cca3 === border).translations['spa'].official}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <hr />
                <Map update={this.Update} lat={countryParam.latlng[0]} lng={countryParam.latlng[1]} />

            </div>
        )

    }

}
