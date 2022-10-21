import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';

function CountryDetails() {
    const { countryId } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios
        .get('https://ih-countries-api.herokuapp.com/countries' + countryId)
        .then( response => {
            setDetails(response.data);
        })
        .catch(e => console.log('error getting country from the API', e));
    }, [countryId]);

    return (
<div class="col-7">
<h1>{details.name.official}</h1>
<table class="table">
  <thead></thead>
  <tbody>
    <tr>
      <td>Capital</td>
      <td>{details.capital}</td>
    </tr>
    <tr>
      <td>Area</td>
      <td>
        {details.area} km
        <sup>2</sup>
      </td>
    </tr>
    <tr>
      <td>Borders</td>
      <td>
        <ul>
          <li><Link to="/AND">{details.borders}</Link></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>
    );
}

export default CountryDetails;