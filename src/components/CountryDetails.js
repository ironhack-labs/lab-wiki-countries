import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = (props) => {
    console.log('Props de RouterDom' ,props)

    const params = props.match.params;
    console.log("hola",params)

}