// aqui ocupamos, useState, useEffect, axios , y las rutas
import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { 
    Link
 } from 'react-router-dom'
import CountryDetails from './CountryDetails'


export default function CountriesList() {

    const [countriesList, setCountriesList] = useState()
    

    useEffect(()=>{
        const  responseAPI = async () =>{
             const listCountries = await axios.get(`https://restcountries.eu/rest/v2/all`)
             setCountriesList(listCountries.data)
            }
            responseAPI()
    },[])
        

    return (
        <>
        <div className="container col-5">
       
        <div className="row">
          <div  style={{maxHeight: "70vh" , overflow: "scroll"}}>
            <div className="list-group">
                {
                countriesList === undefined ? (<p>Cargando</p>) :
                (
                    countriesList.map((e,id)=>{
                        return( 
                            <div key={id} className="list-group-item list-group-item-action">
                                <img alt={e.name} width="20" className="d-flex justify-content-left" src={e.flag}/>
                                 <Link to={e.name}>
                                    {e.name}
                                 </Link>
                            </div>
                            
                        )
                    })
                    
                )
                }
              
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
