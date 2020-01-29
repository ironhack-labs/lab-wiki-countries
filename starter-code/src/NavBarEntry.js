import React, { Component } from 'react'
import CountryDetail from './CountryDetail'
import { Link } from 'react-router-dom';


export default class NavBarEntry extends Component {
    render() {
        let countryCode = this.props.country.cca2.toLowerCase();
        let img_url = "https://www.countryflags.io/" + countryCode + "/flat/64.png";
        console.log(img_url);
        return (
            <div>
            <img src={img_url} alt="noPic"></img>
            <Link to={`/CountryDetail/${this.props.country.cca3}`} >{this.props.country.name.common}</Link>
            </div>
        )
    }
}
