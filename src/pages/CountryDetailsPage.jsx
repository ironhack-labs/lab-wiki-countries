
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const {countryId} = useParams()

   /*  const [countryArray, setCountryArray] = useState([]) 

    const [detail , setDetail] = useState(null) */

    const [country, setCountry] = useState(null)



  /*   const getCountries  = async ()=>{
        try{
            const response = await axios.get(
                `https://ih-countries-api.herokuapp.com/countries/`

            ) 
            setCountryArray(response.data)
            setDetail(countryArray.alpha3Code)
        } catch (error){console.log('error')}} */

    const getDetails = async id=>{
        try{
            const response = await axios.get(
                `https://ih-countries-api.herokuapp.com/countries/${id}`

            ) 
            setCountry(response.data)
        } catch (error){console.log('error')}} 
    

    useEffect(()=>{
        getDetails(countryId)
    },[countryId])


    return(
        <>
            <div className="container">
       <p style={{fontSize: '24px', fontWeight: 'bold'}}>Country Details</p> 
       {!country && <p>Loading...</p> }
       {country && (
        <>

        <h1>{country.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td> 
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
                {country.borders.map(border => {
                    return(
                        <li key={border}>
                        <Link to={`/${border}`} >{border}</Link> </li>
                    )
                })}

                
                 
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </>
       )}

      </div>
        </>
    )
}

export default CountryDetails;
