import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import countriesData from "./../countries.json"

function CountryDetails() {

    const [foundCountry, setFoundCountry] = useState(null)
    const {alpha3Code} = useParams()

    useEffect (() => {
        const country = countriesData.find((neededCountry) => {
            return neededCountry.alpha3Code === alpha3Code
        })

        if(country) {
            setFoundCountry(country)
        }
    }, [alpha3Code])

    return(
        <div>
            {!foundCountry && <h1>Country not found</h1>}

            {foundCountry && (

                <>
                <h1>{foundCountry.name.common}</h1>
                <br />
                <p>Capital</p> <p>{foundCountry.capital[0]}</p>
                <br />
                <p>Area</p> <p>{foundCountry.area}</p>
                <br />
                <p>Borders</p> <p>{foundCountry.borders.length ? 
                <ul>{foundCountry.borders.map((border => {return(<li>{border}</li>)}))}</ul>
                 :
                 "Has no borders to display"}</p>
                <br />
                </>
            )}
            
        </div>

    )
}

export default CountryDetails