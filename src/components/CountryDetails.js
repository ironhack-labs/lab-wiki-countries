import countries from "../countries.json"
import { useParams, Link } from 'react-router-dom'
import { useState,
 } from "react";
 import { useEffect } from "react";

function CountryDetails (props){

    const { id } = useParams();
    console.log('alpha3Code -->', id);
    const [selectedCountry , setSelectedCountry] =useState("")

const filteredCountry = props.countries.filter((country)=>{
    return country.alpha3Code === id
})    

useEffect (() => {
setSelectedCountry(filteredCountry)
},[id])



    return (

<div className="col-7">
{selectedCountry ? ( <div>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry[0].alpha2Code.toLowerCase()}.png`}/>
{console.log("the selected country", selectedCountry)}

 <h1>{selectedCountry[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital:</td>
                  <td>{selectedCountry[0].capital[0]}</td>
                </tr>
                <tr>
                  <td>Area:</td>
                  <td>
                  {selectedCountry[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
              <tr>
                  <td>Borders:</td>
                  <td>
                    <ul>
                     {selectedCountry[0].borders.map(border=>{
                        return (
                            <li><Link to={`/countries/${border}`} 
                            key={border.index}> {border} </Link></li>
                        )
                     })}
                   
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
</div> ): null }
           
          </div>
    )
}

export default CountryDetails;