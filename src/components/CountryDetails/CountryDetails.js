import countries from "../../countries.json"
import React from "react"
import { Link } from "react-router-dom"


export default function CountryDetails(props) {

    console.log(props)

    const { cca3 } = props.match.params
    const countryFound = countries.find(country => country.cca3 === cca3)
    const displayBorder = (elm) =>{
            return(
                countryFound.borders.map((e)=>{
                    return(
                         countries.find((elm) => elm.cca3 === e)
                    ).name.common
                })  
                )    
    } 
    return (
        <div className="row col-12">
            <section>
                {countryFound &&
                    <div>
                        <h1>{countryFound.name.common}</h1>
                        <p>Place: {countryFound.capital} </p>
                        <p>Degree: {countryFound.area}</p>
                        <br/><Link>{displayBorder(countryFound)}</Link>
                        
                    </div>
                }
            </section>
        </div>
    )

}