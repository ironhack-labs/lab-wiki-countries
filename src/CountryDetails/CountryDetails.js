import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCountries, getCountryDetail } from '../services/CountryService'
import './CountryDetails.css'

export const CountryDetails = () => {

  const { code } = useParams()
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    getCountryDetail(code)
      .then( data => {
        setCountry(data)
      })
  }, [code])

  useEffect(() => {
    getAllCountries()
      .then( data => {
        setCountries(data)
      })
  }, [])
  
  const findCountryNameByBorder = border => {
    if(countries.length) {
      const boderCountry = countries.filter( singleCountry => {
        return border === singleCountry.alpha3Code
      })
      return boderCountry[0]?.name?.common
    }
  }

  return (
    <div className='CountryDetails mt-5'>
      <div className='CountryDetails-block'>
        { country ? (
          <div>
            <img className='CountryDetails-block_img mb-3' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=''></img>
            <h3 className='title mt-3 mb-3'>{country.name.common}</h3>
            <div className='CountryDetails-block_table'>
              <table className="table mt-3">
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{country.area} km2</td>
                  </tr>
                  <tr>
                    <td>Boders</td>
                    <td>
                        { country.borders.map(border => {
                            return (
                              <Link key={border} to={`/${border}`} className='link text-primary'>
                                <p >{findCountryNameByBorder(border)}</p>
                              </Link>
                            )
                          })
                        }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
    </div>
  )
}
