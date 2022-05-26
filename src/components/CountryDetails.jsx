import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import uuid from 'react-uuid';

export default function CountryDetails(props) {
  const [countryDetails, setCountryDetails] = useState(null);
  const {countriesList} = props;
  const { countryCode } = useParams();
  const getCountryDetails = async () => {
    try{
      setCountryDetails(null);
      const countriesAPI = await axios({
        method: 'get',
        url: `https://ih-countries-api.herokuapp.com/countries/${countryCode}`,
      });
      setCountryDetails(countriesAPI.data);
    }catch(err){
      console.log(err);
    }   
  }
  
  useEffect(() => {
    getCountryDetails();
  }, [countryCode])

  if (countryDetails === null) {
    return <h3>...Loading</h3>
  }
  
  if (countriesList === null) {
    return <h3>...Loading</h3>
  }

  return (
    <div className="col-7 correctWidth" key={uuid()}>
          <h1>{countryDetails.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{countryDetails.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryDetails.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>            
                      {
                        countryDetails.borders.map((elem) => {return(
                          <li key={uuid()}><Link to={`/details/${elem}`}>{elem}</Link></li>
                        )})
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
  )
}
