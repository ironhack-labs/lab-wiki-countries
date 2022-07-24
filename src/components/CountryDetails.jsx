import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import data from '../countries.json';

function CountryDetails() {

   
    const {alpha3Code} = useParams()
    // Commented variables needed for the first iteration
    //const { data } = props
    //let details = getData(alpha3Code)
    const [fetching, setFetching] = useState(true)
    const [country, setCountry] = useState([])
    const {name, capital, area, borders, alpha2Code} = country

    useEffect(() => {
      fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(data => {
        data.json()
        .then(country => {
          setCountry(country)
          setFetching(false)
        }) 
      })
      .catch("error en el details", console.log)
    },[alpha3Code])

    

      function getData(alpha3Code) {
        return data.find(
          (countries) => countries.alpha3Code === alpha3Code
        );
      }

  return (
    <div className="col-7">
      {fetching ? (<h1>Loading ... </h1>) : 
          (<div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt=""/>
            <h1>{name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {borders.map((border, i) => {
                            return <li key={i}><a href={`/${border}`}>{getData(border).name.common}</a></li>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>)}
    </div>
  )

}

export default CountryDetails