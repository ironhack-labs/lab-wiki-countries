import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CountryDetailsPage() {
  const { alpha3Code } = useParams();
  console.log("URL : https://ih-countries-api.herokuapp.com/countries/" + alpha3Code)
  const [country, setCountry] = useState({});

  useEffect(()=>{
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
    .then((res)=>{
      setCountry(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div className="container">
       <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
       <h1>{country.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {
                  country.borders.map((border)=>{
                    return(<li><a href="#">{border}</a></li>)
                  })
                }         
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default CountryDetailsPage

