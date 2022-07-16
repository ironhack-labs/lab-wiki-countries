import React from "react";
import { useParams } from "react-router-dom";


export default function CountryDetails({countries}) {
  const params = useParams()
  const countryId = params.id
  console.log(countryId)
  const country = countries.find(country => country.alpha3Code === countryId)
  console.log(country.borders)

  function border(borders) {
    let estados = []
    if (country.borders.length !== 0) {
      for (let border of country.borders) {
      let state = countries.find(country => country.alpha3Code === border)
      estados.push(<li><a href={`/${state.alpha3Code}`}>{state.name.official}</a></li>)
      }
    }
    return estados
  }
  
  return (
    <>
      <div className="container col-10" key={country.alpha3Code}>
        <div className="row"> 
        <h1>Country Details</h1>
          <div className="card col-12 border-0">
            <div className="row justify-content-md-center mt-2">
              <div className="col-12">
                <div className="list-group">
                  <img className="mx-auto d-block mt-2" src={`https://flagcdn.com/128x96/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                  <ul className="list-group list-group-flush col-12">
                  <li className="list-group-item"><h3>{country.name.official}</h3></li>
                    <li className="list-group-item">Capital: {country.capital} </li>
                    <li className="list-group-item">Area: {country.area}km² </li>
                    <li className="list-group-item">Borders: <ul>{border()}</ul> </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}