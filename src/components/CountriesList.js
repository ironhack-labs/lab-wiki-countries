import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function CountriesList() {

    const [data, setData] = useState([])

    useEffect(() => {
        const getCountries = async () =>{
            const respuestaApi = await axios.get("https://restcountries.eu/rest/v2/all")
            console.log(respuestaApi)
            setData(respuestaApi.data)
        }
        getCountries()
    },[])

    console.log(data)

    return (
        <>
        <div> 
        {data.map((e)=>{
            return(
                <>
                <Link to={`/countries/${e.alpha3Code}`}>
                    <p>{e.name}</p>
                </Link>
                <p>{e.alpha3Code}</p>
                </>
            )
        })}
        </div>
        </>
    )
}
