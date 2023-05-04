import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from "axios"


const apiURL = "https://ih-countries-api.herokuapp.com/countries"


function CountryDetails({ countries }) {
  const [foundCountry, setFoundCountry] = useState(null)
  const [fetching, setFetching] = useState(true)

  const { countryCode } = useParams()


  useEffect(() => {

    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
    .then((response) => {
      setFoundCountry(response.data)
      setFetching(false)
    })

  }, [countryCode])


  return (

    <>
      {fetching && <p>Loading ...</p>}

      {foundCountry ? 
      
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                <td style={{ width: '30%' }}>Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul className="">
                        {(foundCountry.borders).map(border => {
                           return <li className="d-flex px-1"><Link to={`/${border}`}>{border}</Link></li>

                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
       : <></>}
    </>  
  )
}

export default CountryDetails
