
import React from 'react';
import countries from '../countries.json'

import { Link } from 'react-router-dom'

const CountryDetail = (props) => {


    const getCountry = id => countries.find(oneCountry => oneCountry.cca3 === id)
    const foundCountry = getCountry(props.match.params.cca3)

    return()