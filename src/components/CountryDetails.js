import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {
    useParams,
    Link
} from 'react-router-dom'
import { getNodeText } from '@testing-library/react'


export default function CountryDetails() {
    
    const [countryDetails, setCountryDetails] = useState({
         borders:[]
    })

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
                <h2>{countryDetails.name}</h2>
                <hr/>
                <p>Capital City: {countryDetails.capital}</p>
                <hr/>
                <p>Area: {countryDetails.area} km<sup>2</sup></p>
                <hr/>
                <p>Borders with: </p>

               
               

                <div>{
                !countryDetails ? (<p>Loading</p>) :
                    countryDetails.borders.length ===0 ? 
                    (<li>It's an island</li>) : 
                
                countryDetails.borders.map((elem,id)=>{
                      return(
                  
                          <ul>
                              <li key={id}>
                              <Link to={`/${elem}`}>{elem}</Link>
                              
                              </li>
                          </ul>
                      )
                  })}</div>

            </div>
            
            }
            </>
           

          

            
            
            


           


            


          }
              
              

        </div>

    )
}
