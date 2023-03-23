import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CountryDetails ({countries}) {
const {countryId} = useParams();
const [foundCountry,setFoundCountry] = useState(null)

useEffect (()=> {

    const country = countries.find((country) => {
        return country.alpha3Code === countryId
    })
    if(country) setFoundCountry(country)

},[countries,countryId])

return (
   
   <div className="container">

    <h1> Country Details </h1>
    {!foundCountry
    ? <h3> country not found</h3>
    : (
        <div className = "card"> 
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}  className="card-img-top" style={{width: '180px', height: 'auto'}} />
       
       <div className="card-body">
        <h5 className="card-title">{foundCountry.name.common}</h5>
        </div>
        <ul className="list-group">
        <li className = "list-group-item">Area: {foundCountry.area}</li>
        <li className="list-group-item"> Capital: {foundCountry.capital} </li>
        <li className = "list-group-item"> Borders: {foundCountry.borders} </li>
        </ul>

        
       

        </div>


       
       
    )
    }
   


    </div>
)



}

export default CountryDetails;