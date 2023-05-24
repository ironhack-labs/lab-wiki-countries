import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function CountryDetails() {

    const { id } = useParams()

    const[country, setCountry] = useState()
    let isLoaded = country ? true : false

  useEffect(()=>{
          axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`).then(response => {
          setCountry(response.data)
      })
  },[])

  if(isLoaded) {
    return(
      <>
      <div className="container">
          <div className="row">
          <div className="card col-7">
          <h1>{country.name.common}</h1>
          <table class="table">
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
                    {country.borders.map(border => {
                      return(
                        <li><a href={`/${border}`}>{border}</a></li>
                      )
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <Link to={"/"}>Go back home</Link>
      </>
  )
  } 
  if(!isLoaded) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    )
  }
   
}