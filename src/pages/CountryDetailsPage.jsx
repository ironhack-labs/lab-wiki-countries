
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountryDetails({ selectedCountry }) {
  const [countrySearched, setCountrySearched] = useState("")


  useEffect((details) => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${selectedCountry.alpha3Code}`)
      .then(res => {
        setCountrySearched(res.data)
      })


  }, [])
  const handleNewCountry = (event) =>{
    console.log(event.currentTarget.getAttribute("href"))
    const codeCountry = event.currentTarget.getAttribute("href")
    axios.get(`https://ih-countries-api.herokuapp.com/countries${codeCountry}`)
      .then(res => {
        setCountrySearched(res.data)
      })

  }

  if (countrySearched === "") {
    return <div><h2>Loading....</h2></div>

  } else {
    return (
      <>
        <div>
          <div className="container">
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countrySearched.alpha2Code.toLowerCase()}.png`} alt="" srcset="" />

            <h1>{countrySearched.name.common}</h1>

            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{countrySearched.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countrySearched.area} Km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {countrySearched.borders.map((countryBorders) =>{
                        return(
                          <li key={countryBorders}><Link onClick={handleNewCountry} to={`/${countryBorders}`}>{countryBorders}</Link></li>
                        )
                         
                      }

                      )}


                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>)

  }
}

export default CountryDetails