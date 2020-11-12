import React from 'react'
import { Link } from 'react-router-dom'
// import jsonCL from "../countries.json"


const CountriesList = (props) => {
    // const clNames = jsonCL.map(country=>{
    //     console.log(country)
    // })
    return (
        <div className="col-5" style={{"maxHeight": "90vh", "overflow":"scroll"}}>
            <div  className="list-group">
            {
                props.countries.map((country,index)=>{
                    return(
                        <Link key={index} className="list-group-item list-group-item-action" to={"/" + country.cca3}><img src={"https://www.countryflags.io/"+country.cca2+"/flat/64.png"} alt={country.cca2} height="20"/> {country.name.common}</Link>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default CountriesList