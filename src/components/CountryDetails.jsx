import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const { countryID } = useParams();
  const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryID}`

  const colStyles = { maxHeight: "90vh", overflow: "scroll" }



  useEffect(() => {
    axios.get(apiURL)
      .then(rawData => {
        setCountry(rawData.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [countryID, country])

  const getCountryName = (code) => {
    if(!code){
      return ''
    }

    const country = countries.find((country) => country.alpha3Code === code);
    if(!country){
      return '';
    }
    return country.name.official
  }
  return (
    <> 
    {!country && <p>Loading {countryID} details</p> }
  {/* {country && <div>{JSON.stringify(country, null, 2)}</div>} */}
    {country && <div className="container">
      <div className="row">
        <div className="col-5" style={colStyles} >
          <div className="list-group">
            {countries.map(oneCountry => {
              return <div key={oneCountry.alpha3Code} className='d-flex flex-column align-items-center my-3 list-group-item'>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} alt={oneCountry.name.common} />
                <Link to={`/countries/${oneCountry.alpha3Code}`} className="list-group-item-action"> {oneCountry.name.official}</Link>
              </div>
            })}
          </div>
        </div>
        <div className="col-7">
          <div className='d-flex flex-column align-items-center my-3'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common}  style={{width: '140px'}}/>
            <h1>{country.name.common}</h1>
          </div>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
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
                    { country.borders.map(borderCountryCode => {
                      return (<li className='list-group-item list-group-item-action' key={borderCountryCode}><a href={`/countries/${borderCountryCode}`}>{getCountryName(borderCountryCode)}</a></li>)
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>}
    </>
  )
}

export default CountryDetails