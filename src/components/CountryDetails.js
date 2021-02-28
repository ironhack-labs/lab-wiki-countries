import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {
    useParams,
    Link
} from 'react-router-dom'
import { getNodeText } from '@testing-library/react'


export default function CountryDetails() {
    
    const [countryDetails, setCountryDetails] = useState([])

    const {countryCode} = useParams()
    console.log(countryCode)

    // console.log("estos son los params", countrydetails) 

    useEffect(()=>{

            const consultarApi = async ()=>{
                
                const respuestaDelApi = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}
                `
                ).catch((error)=>{
                    console.log(error)
                })

            console.log("Lo que estoy recibiendo del API:",respuestaDelApi.data)




            setCountryDetails(respuestaDelApi.data)

    }

    consultarApi(countryCode)

    },[countryCode])

// console.log(countryDetails.borders)
    return (
        <div>
        
          {
            <>  
            { 
                <div>
                <p>{countryDetails.name}</p>
                <p>{countryDetails.capital}</p>
               
                <p>{countryDetails.borders.map((elem,id)=>{
                    return(

                        <ul>
                            <li key={id}>
                            <Link to={`/countries/${elem}`}>{elem}</Link>
                            
                            </li>
                        </ul>
                    )
                })}</p>

            </div>
            
            }
            </>
           

          

            
            
            


           


            


          }
              
              

        </div>

    )
}
