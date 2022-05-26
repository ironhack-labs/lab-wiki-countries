import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function CountriesList() {

  const [ countriesList, setCountriesList ] = useState(null)

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    try{
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
      setCountriesList(response.data)
      
      // const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
      // const responseJSON = await response.json()
      // setCountriesList(responseJSON.result)

    } catch(err){console.log(err)}
  }

  if ( countriesList === null ){
    return <h3>...Loading</h3>
  }

  return (
    <div>

      { countriesList.map((eachCon) => {
        return (
          <Link key={eachCon.alpha3Code} to={`${eachCon.alpha3Code}`}>
            <div className='country d-flex justify-content-center aling-items-center flex-column'>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCon.alpha2Code.toLowerCase()}.png`} alt="" />
              <h4 className='title mt-3'>{eachCon.name.common}</h4>
            </div>
          </Link>
            
          
        )
      })}
    </div>
  )
}

export default CountriesList