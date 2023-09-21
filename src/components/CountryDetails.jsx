import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

function CountryDetails(props) {
  const {alpha3Code} = useParams()
  const [country, setCountry] = useState(null)
  const [borders, setBorders] = useState([])

  function findCountry() {
    const foundCountry = props.countries.find((oneCountry)=>{
      return oneCountry.alpha3Code === alpha3Code
    })
    setCountry(foundCountry)
  }
  function findBorders() {
    const foundBorders = props.countries.filter((oneCountry)=>{
      return oneCountry.borders.includes(alpha3Code)
    })
    setBorders(foundBorders)
  }
  useEffect(()=>{
    findCountry()
    findBorders()
  },[alpha3Code])

  if(country){
    return (

      <div className="col-7">
              <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
              <h1>{country.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital[0]}</td>
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
                        {borders.length > 0 && borders.map((oneBorder)=>{
                          return(
                            <li key={oneBorder.alpha3Code}>
                               <Link to={`/${oneBorder.alpha3Code}`}> {oneBorder.name.common}</Link> 
                            </li>
                          
                            
                          )
                        })}
                       
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    )

  } else {
    return <h2>..Loading</h2>
  }
  
}

export default CountryDetails