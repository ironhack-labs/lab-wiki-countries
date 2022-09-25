import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';


const CountryDetails = (props) => {
    const tdStyle = {
        width: "30%",
    }
    const imgStyle = {
      width: "15vw",
    }
    const {countries} = props //destructuracion
    //Accedemos al id en la url usando el hook useParams
    const { id } = useParams()
    //Encontramos los detalles del pais
    const countrySelected = countries?.filter((eachCountry, pos) => {
        return eachCountry.alpha3Code === id
    })
    const current = countrySelected[0]
    // const [details, setDetails] = useState()
    // setDetails(current)

    const {name, capital, area, borders} = current

  return (
        <div className="col-7">
            <img 
                  src={`https://flagpedia.net/data/flags/icon/72x54/${current.alpha2Code.toLowerCase()}.png`}
                  alt="flag.img"
                  style={imgStyle}
            />
            <h1>{name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Capital</td>
                  <td>{capital}</td>
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
                      <li><a href="/AND">{borders}</a></li>
                      {
                        
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}

export default CountryDetails