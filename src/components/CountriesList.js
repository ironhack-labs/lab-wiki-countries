import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'



export default function CountriesList() {

    const [countriesList, setCountriesList] = useState([])

    useEffect(()=>{

        const getCountries = async () => {

            const respuestaServidor = await axios.get("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")

            const countries = await respuestaServidor.data

            setCountriesList(countries)

            console.log("countries",countries)
            // console.log("respuestaS.data:", respuestaServidor.data)

            // console.log("Nombre oficial:", respuestaServidor.data[0].name.official)

            // console.log("Capital:",respuestaServidor.data[0].capital )

            // console.log("Área:",respuestaServidor.data[0].area )

            // console.log("Borders:",respuestaServidor.data[0].borders )
            
            


        }
        getCountries()
    },[])


    return (
        <div>

        {/* {countriesList.map((element,id)=>{

            return(
                <p key={id}>{element}</p>
            )

        })} */}
            
        </div>
    )
}
