import { useEffect, useState } from "react"
import countriesAll from './../../countries.json'
import { Link } from "react-router-dom"


const CountriesList = () => {
    const [countriesInfo, setCountriesInfo] = useState([])

     useEffect(() => {setCountriesInfo(countriesAll)}, [])


    return (
        <>
        <h1>Listado de Paises</h1>
        <hr/>
        {countriesInfo.map(elm => {
            return( 
            <div key={elm.elpha3code}>
                <Link to={`/countries/${elm.alpha3Code}`} > {elm.name.official} </Link>
            
            </div>
            )
        })}
        <hr/>
        </>
    )
}


export default CountriesList