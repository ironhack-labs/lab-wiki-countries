import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react"


export default function CountriesDetails(props){

    const { countryId } = useParams()
    const { countriesArray } = props
    const [ country, setCountry ] = useState(null)
    
    // const countryObject = countriesArray.filter((country) => {
      
    //     return (country.alpha3Code === countryId)
    // })
    
    const baseURL = "https://ih-countries-api.herokuapp.com/countries/"

    useEffect(() => {
      axios.get(baseURL + countryId)
      .then((res) => {
        // console.log(res.data)
        setCountry(res.data)
      })
      .catch((e) => {
          console.log(e)
      })
  }, [countryId])

  const countryData = ()=>{
    return(
        <>
        {countryId}
        <p><b>Name:</b> {country.name.common}</p>
        <p><b>Official name:</b> {country.name.official}</p>
        </>

    )  
  }
    return(

        
         <div className="right-div">
            
            {country === null ? "No data available": countryData()}
    
        
         </div>
     )
}