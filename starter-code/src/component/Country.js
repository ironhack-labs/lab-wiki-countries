import React, { Component } from 'react';
import api from '../Services/api';
import { Link } from 'react-router-dom';
import countries from '../countries.json';


class Country extends Component {

    state = {
        contry: {}
    }

    getAllCountries = () => {
        console.log('getAllCountries');
    }

    getCountry = () => {
        console.log('getCountry');
    }
    componentDidMount = () => {
        const { params } = this.props.match;
        const { countryCode } = params;
        const newState = {
            country:{
                code:countryCode
            }
        }
        this.setState(newState)

    }


    render() {

        return (
            
        )
    }
}

export default Country;
