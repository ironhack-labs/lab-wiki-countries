import React from 'react';
import { Link } from 'react-router-dom';

const countryDetails = (props) => {
  console.log(props)
  return(
    <div>
        <h1>{props.match.params.id} Country countryDetails</h1>
    </div>
  )
}

export default countryDetails;