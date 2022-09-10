import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import countriesData from '../countries.json'


const CountryDetails = () => {

  const { id } = useParams();

  const [countries, setCountries] = useState(countriesData);
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if(id) {
      const country = countries.find(country => country.alpha3Code === id)
      setCountry(country);
      setLoading(false)
    }
  }, [id]);
  
  return ( !loading ? <div className="col-7">
      < h1 >{country.name.official}</h1 >
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} KM
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li><a href="/AND">Andorra</a></li>
                <li><a href="/BEL">Belgium</a></li>
                <li><a href="/DEU">Germany</a></li>
                <li><a href="/ITA">Italy</a></li>
                <li><a href="/LUX">Luxembourg</a></li>
                <li><a href="/MCO">Monaco</a></li>
                <li><a href="/ESP">Spain</a></li>
                <li><a href="/CHE">Switzerland</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div > : <div>Erro</div>)



}

export default CountryDetails