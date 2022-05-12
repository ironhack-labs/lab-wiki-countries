// render via react-router-doms routes - it should recieve the country code (alpha3Code) via the URL
import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'


const CountryDetails = (props) => {

    const [details, setDetails] = useState({})
    const {countryCode} = useParams()
 

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
        .then(response => {
            setDetails(response.data)
        })
        .catch(err => {console.log("Error getting details from api", err)});
    }, [countryCode])

    console.log(details)
    console.log(details.length)

    let detailsArr = [details]

  return (
      
    <div>
    <h1>CountryDetails</h1>
    {details ? detailsArr.map((country) => {
        return (
    <div className="box">
    <h4>Capital: {country.capital ? country.capital : "No Capital"} </h4>
    <h5>Area: {country.area}</h5>
    <h6> Borders: {country.borders ? country.borders : "No Borders"}</h6>
    </div>)
    }): <p> "Loading" </p>}
     </div>
  )
}

export default CountryDetails