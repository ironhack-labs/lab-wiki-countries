import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CountryDetails = (props) => {
  const { alpha3Code } = props.match.params
  const [ country, setCountry ] = useState({})
  const [ loading, setLoading ] = useState(true)

  useEffect( () => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${ alpha3Code }`)
      .then( resFromApi => {
        console.log(resFromApi)
        setCountry(resFromApi.data)
        setLoading(false)
      } )
      .catch( error => console.log( error ) )
  },[ alpha3Code ])

  return (
    <div class="col-sm-3">
      { 
        loading ? <h1>Loading...</h1> :
          <div className='card'>
            <img className='img-fluid' src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" />
            <div className='card-body'>
              
              <span className='card-title' > { country.name.common } </span> 
            </div>
          </div>
      }
    </div>
  )
}

export default CountryDetails;