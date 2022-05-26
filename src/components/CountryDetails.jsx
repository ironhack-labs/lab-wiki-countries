import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails() {
 

  const { countryId } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {

    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log(response.data)
        setCountry(response.data);
      }, [countryId])
  })

  
  
  return (

    <div class="col-7">
      {!country && <h2>No country found!</h2>}
      {country && (
        <>
            <h1>{country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
          
                  </td>
                </tr>
              </tbody>
          </table>
          </>
      )};
    </div>
  )
}

export default CountryDetails;
