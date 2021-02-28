import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {
    useParams
} from 'react-router-dom'


export default function CountryDetails() {
    
    const [countryDetails, setCountryDetails] = useState([])

    const {countryCode} = useParams()
    console.log(countryCode)

    // console.log("estos son los params", countrydetails) 

    useEffect(()=>{

            const consultarApi = async ()=>{
                
                const respuestaDelApi = await axios.get(`https://restcountries.eu/rest/v2/name/${countryCode}?fullText=true
                `
                )

            console.log("Lo que estoy recibiendo del API:",respuestaDelApi)




            setCountryDetails(respuestaDelApi.data[0])

    }

    consultarApi(countryCode)

    },[countryCode])

console.log(countryDetails.borders)
    return (
        <div>
        
          {
            <>  
            <p>{countryDetails.name}</p>
            <p>{countryDetails.capital}</p>
            <p>{countryDetails.borders.map((element,id)=>{
                return (
                    <ul>
                    <li key={id}>{element}</li>
                    </ul>
                    )

            })}</p>

            
            </>
            


           


            


          }
              
              

        </div>

    )
}
