import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function CountryDetails() {

  const [ countryProfile, setCountryProfile ] = useState(null)
    
  const { country } = useParams()


  const getCountryProfile = async () => {
    setCountryProfile(null)
    try{
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${country}`)
      setCountryProfile(response.data)
    }catch(err){console.log(err)}
  }

  useEffect (() => {
    getCountryProfile()
  }, [country])

  
  if ( countryProfile === null ){
    return <h3>...Loading</h3>
  }



  return (
    <div className='CountryDetails mt-5'>
      <div className='CountryDetails-block'>
        <div>
            <img className='CountryDetails-block_img mb-3' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code?.toLowerCase()}.png`} alt="" />
            <h3 className='title mt-3 mb-3'>{countryProfile.name.common}</h3>
            <div className='CountryDetails-block_table'>
              <table className='table mt-3'>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{countryProfile.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{countryProfile.area} km<sup>2</sup></td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                    {countryProfile.borders.map((elem, index) => {return(
                        <li key={index}><Link to={`${elem}`}>{elem}</Link></li>
                      )})
                    }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
      
      
    </div>
  )
}

export default CountryDetails