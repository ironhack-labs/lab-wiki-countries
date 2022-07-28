import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

function CountryDetails(props){

    const {alpha3Code} = useParams()

    return <h1>-This is the CountryDetails page-</h1>
}

export default CountryDetails;