import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Axios from 'axios'

export default function CountryDetails() {
  const {id} = useParams()
  const [country , setCountry ] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    Axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then(res=>{
        console.log('country : ', res.data)
        setCountry(res.data)
        setIsLoading(false)
      })
  },[id])

  
  
  if(!country){
    return (<></>)
  }
  return (

    <div className="col-7">
      {isLoading ? <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
              </div>
          :
          <><img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        />
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
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
                  {country.borders.map((border) => (
                    <li>
                      <Link to={`/country/${border}`}>{border}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </>}
      
    </div>
  );
}
